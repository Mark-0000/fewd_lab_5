var hotel = {
    // Object properties
    name: 'Goatieezz',
    rooms: 110,
    booked: 25,
    gym: true,
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

var msg2 = '<p><b>page title: </b>' + document.title + '<br />';
msg2 += '<b>page address: </b>' + document.URL + '<br />';
msg2 += '<b>last modified: </b>' + document.lastModified + '</p>';



// Define a constructor function template for hotels
function Hotel(name, rooms, booked) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var clayHotel = new Hotel('ZGoats', 68, 3);
var lemonHotel = new Hotel('Goat Pirates', 56, 15);

// Declare a variable to hold the name of the hotel and room availability
var details1 = clayHotel.name + ' stock: ';
    // add content to an existing variable----
    details1 += clayHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = lemonHotel.name + ' stock: ';
    details2 += lemonHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;













var el2 = document.getElementById('footer');
el2.innerHTML = msg2;
// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Create a variable to hold the year this year
var year = today.getFullYear();

// Create a variable called el to hold the element whose id attribute has a value of footer
var el4 = document.getElementById('footer');
// Write the year into that element.
el4.innerHTML += '<p>Copyright &copy;' + year + '</p>';
