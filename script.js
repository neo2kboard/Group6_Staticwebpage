function showConfirmation(event) {

    event.preventDefault();

    var name = document.getElementById('name').value;

    document.getElementById('contactForm').reset();

    document.querySelector('.contact-form-container').innerHTML = `
        <p>Thank you, <strong>${name}</strong> for reaching out. We’ll get back to you soon!</p>
    `;

    return false;
}
