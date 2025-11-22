// Allow Page to Fully Load 
document.addEventListener('DOMContentLoaded', function () {

    //Get Confirmation Details Container
    const confirmationDiv = document.getElementById('confirmation-details');

    //Retrieve Data from LocalStorage
    const reservationData = JSON.parse(localStorage.getItem('reservationData'));
  
    if (reservationData) {
      let listItems = '';
  
      // Add All Common Fields
      listItems += `<li><strong>Name:</strong> ${reservationData.name}</li>`;
      listItems += `<li><strong>Email:</strong> ${reservationData.email}</li>`;
      listItems += `<li><strong>Phone:</strong> ${reservationData.phone}</li>`;
      listItems += `<li><strong>Date:</strong> ${reservationData.date}</li>`;
      listItems += `<li><strong>Time:</strong> ${reservationData.time}</li>`;
  
      // Check if this as a Table Booking
      if (reservationData.guests) {
        listItems += `<li><strong>Number of Guests:</strong> ${reservationData.guests}</li>`;
        listItems += `<li><strong>Booking Type:</strong> Table</li>`;
      }
      // Check if this is a Party Booking
      else if (reservationData.roomSize) {
        listItems += `<li><strong>Room Size:</strong> ${reservationData.roomSize}</li>`;
        listItems += `<li><strong>Booking Type:</strong> Party</li>`;
      }
  
      // Add Special Request if Applicable
      if (reservationData.specialRequests) {
        listItems += `<li><strong>Special Requests:</strong> ${reservationData.specialRequests}</li>`;
      }
  
      // Add List to Card
      confirmationDiv.innerHTML = `<ul class="reservation-list">${listItems}</ul>`;
    } else {
      confirmationDiv.innerHTML = '<p>No reservation details found. Please make a booking.</p>';
    }
  });