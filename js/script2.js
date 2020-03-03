var hotel = {
    // Object properties
    name: 'Cowieezz',
    rooms: 210,
    booked: 22,
    gym: true,
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('ShopName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('stock');
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
var clayHotel = new Hotel('ZCows', 45, 3);
var lemonHotel = new Hotel('Cow Pirates', 96, 15);

// Declare a variable to hold the name of the hotel and room availability
var details1 = clayHotel.name + ' stock: ';
    // add content to an existing variable----
    details1 += clayHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('shop1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = lemonHotel.name + ' stock: ';
    details2 += lemonHotel.checkAvailablity();
var elHotel2 = document.getElementById('shop2');
elHotel2.textContent = details2;
