// booking.js

// Check if Booking or Party is Selected
function selectType(type) {
    localStorage.setItem('bookingType', type);

    // Redirect Correct Page
    if (type === 'Table') {
        window.location.href = 'tableform.html';
    } else if (type === 'Party') {
        window.location.href = 'partyform.html';
    }
}
