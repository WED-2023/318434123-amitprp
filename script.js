document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var emoji = document.getElementById('emoji').value;

    // Create mailto link
    var mailtoLink = 'mailto:' + email + '?subject=Contact&body=' + encodeURIComponent(message + ' ' + emoji);

    // Open mailto link
    window.location.href = mailtoLink;
});
