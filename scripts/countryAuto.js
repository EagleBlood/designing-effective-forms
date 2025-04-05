const countrySearchInput = document.getElementById('countrySearch');
const countrySuggestions = document.getElementById('countrySuggestions');

countrySearchInput.addEventListener('input', () => {
    const query = countrySearchInput.value.toLowerCase();
    const options = Array.from(countryInput.options);
    const matches = options.filter(option => option.value.toLowerCase().includes(query) && option.value);

    // Clear previous suggestions
    countrySuggestions.innerHTML = '';

    // Populate suggestions
    matches.forEach(match => {
        const li = document.createElement('li');
        li.className = 'dropdown-item';
        li.textContent = match.value;
        li.addEventListener('click', () => {
            countryInput.value = match.value;
            countrySearchInput.value = match.value;
            countrySuggestions.innerHTML = '';
        });
        countrySuggestions.appendChild(li);
    });

    // Show or hide the dropdown
    countrySuggestions.style.display = matches.length ? 'block' : 'none';
});

// Hide suggestions when clicking outside
document.addEventListener('click', (event) => {
    if (!countrySearchInput.contains(event.target)) {
        countrySuggestions.style.display = 'none';
    }
});