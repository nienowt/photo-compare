var images = [];

 function Photo(name, reason, path){
  this.name = name;
  this.reason = reason;
  this.path = path;
  votes = 0;
  images.push(this);
};

var birdOne = new Photo("Squiggles", "Squiggles is having a bad day", "images/sadbird1.jpg");
var birdTwo = new Photo("Squawks", "Squawks dropped an egg", "images/sadbird2.jpg");
var birdThree = new Photo("Weepy", "Weepy is just so sad", "images/sadbird3.jpg");
var birdFour = new Photo("Darren", "Darren had a bad day", "images/sadbird4.jpg");
var birdFive = new Photo("Kakaaa", "Kakaa is just kinda lonely", "images/sadbird5.jpg");
var birdSix = new Photo("Big Bird", "Big Bird ate some bad seeds", "images/sadbird6.jpg");
var birdSeven = new Photo("Carrol","Carrol can't dance", "images/sadbird7.jpg");
var birdEight = new Photo("Creepy Theodore", "Theodore makes others sad, which in turn makes him sad", "images/sadbird8.jpg");
var birdNine = new Photo("Jaime","Jaime is afraid of the dark, this saddens her","images/sadbird9.jpg");
var birdTen = new Photo("Clef","Clef lost his job","images/sadbird10.jpg");
var birdEleven = new Photo("Jean", "Jean has a terrible singing voice","images/sadbird12.jpg")
var birdTwelve = new Photo("Aleks","Aleks did not wake up early enough to get the worm","images/sadbird11.jpg")

//generate images + responses to events

var generateRandom = function() {
    return images[Math.floor(Math.random() * images.length)]
  };

var content = generateRandom();
var content2 = generateRandom();

var tracker = {
  // generateRandom: function() {
  //   return images[Math.floor(Math.random() * images.length)]
  // },
  loadImages: function() {
    // var content = this.generateRandom();
    var fig1 = document.getElementById("imgOne");
    fig1.src = content.path;
    var figCaption1 = document.getElementById("captionOne");
    figCaption1.textContent = content.reason;

    // var content2 = this.generateRandom();
      if (content !== content2) {
    var fig2 = document.getElementById("imgTwo");
    fig2.src = content2.path;
    var figCaption2 = document.getElementById("captionTwo");
    figCaption2.textContent = content2.reason;
    } else {
    tracker.loadImages();
    }
  },
};

 var click = document.getElementById("imgOne");
 var click2 = document.getElementById("imgTwo");
 // var handleClick = function () {
 //    var response = document.createElementById("h3");
 //    response.textContent =
 // };

 var handleClick = function () {
    var response = document.createElement("h3");
    response.textContent = "You chose" + " " + content.name;
    document.body.appendChild(response);
    var button = function () {
      var form = document.createElement("form");
      var input = document.createElement("input");
      input.type = "submit";
      input.name = "submit";
      input.value = "New Images";
      form.appendChild(input);
      document.body.appendChild(form);
    }
    button();
 };
  var handleClick2 = function () {
    var response = document.createElement("h3");
    response.textContent = "You chose" + " " + content2.name;
    document.body.appendChild(response);
    var button = function () {
      var form = document.createElement("form");
      var input = document.createElement("input");
      input.type = "submit";
      input.name = "submit";
      input.value = "New Images";
      form.appendChild(input);
      document.body.appendChild(form);
    }
    button();
 };


tracker.loadImages();

click.addEventListener('click', handleClick);
click2.addEventListener('click', handleClick2);
