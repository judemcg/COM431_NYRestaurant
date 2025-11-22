// bookingForm.js

$(document).ready(function () {
    
    // Convert Date to YYYY-MM-DD
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    // Only Allow Dates after Today
    $('input[type="date"]').attr('min', todayStr);

    // Only Allow Bookings up to 1 Year in Advance
    let maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const maxDateStr = maxDate.toISOString().split('T')[0];
    $('input[type="date"]').attr('max', maxDateStr);

    // Form Submission Handler
    $('form').on('submit', function (event) {
        event.preventDefault();

        // Retrieve Values from Inputs
        const name = $(this).find('input[name="name"]').val().trim();
        const email = $(this).find('input[name="email"]').val().trim();
        const phone = $(this).find('input[name="phone"]').val().trim();
        const bookingDate = $(this).find('input[name="date"]').val();
        const bookingTime = $(this).find('input[name="time"]').val();

        // Validate all Fields are Filled, Alert if Not
        if (!name || !email || !phone || !bookingDate || !bookingTime) {
            alert("Please fill in all required fields.");
            return;
        }

        // Validate if Date is Within 1 Year, Alert if Not
        const selectedDate = new Date(bookingDate);
        if (selectedDate < today || selectedDate > maxDate) {
            alert("Please choose a booking date between today and one year from now.");
            return;
        }

        // Validate if Time is Within Opening Hours
        function isValidTime(timeStr) {
            const [hours, minutes] = timeStr.split(':').map(Number);
            const timeInMinutes = hours * 60 + minutes;
            const minTime = 9 * 60;
            const maxTime = 21 * 60;
            return timeInMinutes >= minTime && timeInMinutes <= maxTime;
        }

        // Check if the Time is Within Valid Hours, Alert if Not
        if (!isValidTime(bookingTime)) {
            alert("Please select a time between 9:00 AM and 9:00 PM.");
            return;
        }

        // Variables for Optional Fields
        let guests = null;
        let roomSize = null;
        let specialRequests = $(this).find('textarea').val().trim(); // Recieve Special Request

        // Validate the Number of Guests, Alert if Invalid
        if ($(this).find('input[name="guests"]').length) {
            guests = parseInt($(this).find('input[name="guests"]').val(), 10);
            if (isNaN(guests) || guests < 1 || guests > 25) {
                alert("Please enter a valid number of guests between 1 and 25.");
                return;
            }
        }

        // Validate the Room Size, Alert if Invalid
        else if ($(this).find('select[name="roomSize"]').length) {
            roomSize = $(this).find('select[name="roomSize"]').val(); //
            if (!roomSize) {
                alert("Please select a room size.");
                return;
            }
        }

        // Store Booking in LocalStorage
        const reservationDetails = {
            name: name,
            email: email,
            phone: phone,
            date: bookingDate,
            time: bookingTime,
            guests: guests,
            roomSize: roomSize,
            specialRequests: specialRequests
        };
        localStorage.setItem("reservationData", JSON.stringify(reservationDetails));

        // Redirect to Confirmation
        window.location.href = 'bookingConfirmation.html';
    });
});
