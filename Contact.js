document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Display a confirmation message (or you could send it to a server)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    document.getElementById('contact-form').reset();
});
