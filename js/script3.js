function myclick1(){
  alert("Ooops! You must really love goats huh?")
}
function myclick2(){
  alert("Ooops! You must really love cows huh?")
}
function myclick3(){
  alert("Ooops! You must really love pigs huh?")
}
var hotel = {
    // Object properties
    name: 'Piggiezz',
    rooms: 130,
    booked: 27,
    gym: true,
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('ShopName1');
elName.textContent = hotel.name;

var elRooms = document.getElementById('stock2');
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
var clayHotel = new Hotel('ZPigs', 95, 3);
var lemonHotel = new Hotel('Pig Pirates', 156, 15);

// Declare a variable to hold the name of the hotel and room availability
var details1 = clayHotel.name + ' stock: ';
    // add content to an existing variable----
    details1 += clayHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('shop11');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = lemonHotel.name + ' stock: ';
    details2 += lemonHotel.checkAvailablity();
var elHotel2 = document.getElementById('shop22');
elHotel2.textContent = details2;
