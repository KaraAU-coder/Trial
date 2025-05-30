// Configuration
const CONFIG = {
    csvVersion: '1.0',
    defaultLanguage: 'EN Term'
};

let glossaryData = [];

// DOM Elements
const elements = {
    searchInput: document.getElementById('searchInput'),
    searchField: document.getElementById('searchField'),
    categoryFilter: document.getElementById('categoryFilter'),
    domainFilter: document.getElementById('domainFilter'),
    resultsContainer: document.getElementById('resultsContainer')
};

// Initialize the application
async function init() {
    await loadData();
    populateFilters();
    search(); // Show all terms initially
}

// Load glossary data
async function loadData() {
    try {
        const response = await fetch('data/terms.json');
        glossaryData = await response.json();
        console.log(`Loaded Medical Glossary ${CONFIG.csvVersion} with ${glossaryData.length} terms`);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Populate filter dropdowns
function populateFilters() {
    // Get unique categories and domains
    const categories = [...new Set(glossaryData.map(term => term.Category))];
    const domains = [...new Set(glossaryData.map(term => term.Domain))];

    // Add category options
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        elements.categoryFilter.appendChild(option);
    });

    // Add domain options
    domains.forEach(domain => {
        const option = document.createElement('option');
        option.value = domain;
        option.textContent = domain;
        elements.domainFilter.appendChild(option);
    });
}

// Main search function
function search() {
    const searchTerm = elements.searchInput.value.toLowerCase();
    const searchField = elements.searchField.value;
    const category = elements.categoryFilter.value;
    const domain = elements.domainFilter.value;

    const results = glossaryData.filter(term => {
        // Filter by category and domain first
        if (category && term.Category !== category) return false;
        if (domain && term.Domain !== domain) return false;

        // If no search term, return all filtered results
        if (!searchTerm) return true;

        // Search in specific field or all fields
        if (searchField === 'all') {
            return Object.values(term).some(
                value => value && value.toString().toLowerCase().includes(searchTerm)
            );
        } else {
            const fieldValue = term[searchField];
            return fieldValue && fieldValue.toString().toLowerCase().includes(searchTerm);
        }
    });

    displayResults(results);
}

// Display results
function displayResults(results) {
    elements.resultsContainer.innerHTML = '';

    if (results.length === 0) {
        elements.resultsContainer.innerHTML = '<p>No matching terms found</p>';
        return;
    }

    results.forEach(term => {
        const card = document.createElement('div');
        card.className = 'term-card';
        
        card.innerHTML = `
            <div class="term-header">
                <span class="id-badge">${term.ID}</span>
                <h3>${term['EN Term']}</h3>
                <span class="domain-tag">${term.Domain}</span>
            </div>
            <div class="translations">
                <p><strong>中文:</strong> ${term['ZH Term']}</p>
                <p><strong>Français:</strong> ${term['FR Term']}</p>
            </div>
            <div class="term-details">
                <p><strong>Category:</strong> ${term.Category} > ${term.Subcategory}</p>
                <p><strong>Definition:</strong> ${term.Definition}</p>
            </div>
            <div class="examples">
                <p class="example-title">Examples:</p>
                <p>EN: ${term.Example_EN}</p>
                <p>中文: ${term.Example_ZH}</p>
                <p>FR: ${term.Example_FR}</p>
            </div>
        `;
        
        elements.resultsContainer.appendChild(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);