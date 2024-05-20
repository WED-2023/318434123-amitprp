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

// Get references to the like button and like count elements
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

// Initialize like count from local storage or default to 0 if not found
let likes = localStorage.getItem('likes') || 0;

// Update the like count display
likeCount.textContent = likes;

// Add event listener to the like button
likeButton.addEventListener('click', function() {
    // Increment the like count
    likes++;
    // Update the like count display
    likeCount.textContent = likes;
    // Save the updated like count to local storage
    localStorage.setItem('likes', likes);
});