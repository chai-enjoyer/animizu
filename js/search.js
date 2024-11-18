// Select search input and anime types
const searchInput = document.getElementById('search');
const animeTypes = document.querySelectorAll('.anime-type');

// Event listener for search input
searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.toLowerCase();

    // Filter anime types
    animeTypes.forEach(animeType => {
        const animeName = animeType.querySelector('h3').textContent.toLowerCase();

        // Show or hide based on the search query
        if (animeName.includes(searchQuery)) {
            animeType.style.display = 'block'; // Show matching anime
        } else {
            animeType.style.display = 'none'; // Hide non-matching anime
        }
    });
});
