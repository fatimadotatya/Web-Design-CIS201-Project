const btn = document.getElementById('submitBtn');

btn.addEventListener('click', function(event) {
    event.preventDefault(); // This stops the page from refreshing
    alert('Thank you for contacting us!');
});
