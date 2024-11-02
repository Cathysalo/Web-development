document.getElementById('searchButton').addEventListener('click', () => {
    const street = document.getElementById('street').value.trim();
    const city = document.getElementById('city').value.trim();

    if (street && city) {
        const location = `${street}, ${city}`;
        document.getElementById('mapFrame').src = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
    } else {
        alert('Please provide both street and city details.');
    }
});
