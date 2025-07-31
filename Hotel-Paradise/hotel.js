document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const bookBtn = document.getElementById('formbutton');

    bookBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent actual form submission

        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const date = form.elements['date'].value;
        const roomType = form.elements['roomtype'].value;

        // Basic Validation
        if (!name || !email || !date || !roomType) {
            alert('Please fill all the fields.');
            return;
        }

        // Save data to localStorage as mock backend
        const booking = { name, email, date, roomType };
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        alert('Booking successful! Thank you ' + name);
        form.reset();
    });

    // Help button functionality
    const helpBtn = document.querySelector('.helpbutton button');
    helpBtn.addEventListener('click', () => {
        alert("How can we help you?\nYou can contact us at support@paradisehotel.com or call +91-12345-67890");
    });
});

function toggle_element(button) {
  const para = button.nextElementSibling;
  
  if (para.style.display === "none") {
    para.style.display = "block";
    button.textContent = "Hide";
  } else {
    para.style.display = "none";
    button.textContent = "Show";
  }
}
