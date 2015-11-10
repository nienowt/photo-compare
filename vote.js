var images = [];

 function Photo(name, reason, path){
  this.name = name;
  this.reason = reason;
  this.path = path;
  this.votes = 0;
  images.push(this);
};

var birdOne = new Photo("Squiggles", "Squiggles is having a bad day", "images/sadbird1.jpg");
var birdTwo = new Photo("Squawks", "Squawks dropped an egg", "images/sadbird2.jpg");
var birdThree = new Photo("Weepy", "Weepy is just so sad", "images/sadbird3.jpg");
var birdFour = new Photo("Darren", "Darren wishes he could wear shoes", "images/sadbird4.jpg");
var birdFive = new Photo("Kakaaa", "Kakaa is just kinda lonely", "images/sadbird5.jpg");
var birdSix = new Photo("Big Bird", "Big Bird ate some bad seeds", "images/sadbird6.jpg");
var birdSeven = new Photo("Carrol","Carrol can't dance", "images/sadbird7.jpg");
var birdEight = new Photo("Creepy Theodore", "What Theodore believed to be a seed, was not.", "images/sadbird8.jpg");
var birdNine = new Photo("Jaime","Jaime is afraid of the dark, this saddens her","images/sadbird9.jpg");
var birdTen = new Photo("Clef","Clef lost his job","images/sadbird10.jpg");
var birdEleven = new Photo("Jean", "Jean has a terrible singing voice","images/sadbird12.jpg")
var birdTwelve = new Photo("Aleks","Aleks did not wake up early enough to get the worm","images/sadbird11.jpg")

//generate images + responses to events

var tracker = {
  generateRandom: function() {
    return images[Math.floor(Math.random() * images.length)]
  },

  loadImages: function() {
    var fig1 = document.getElementById("imgOne");
    fig1.src = content.path;
    var figCaption1 = document.getElementById("captionOne");
    figCaption1.textContent = content.reason;
      if (content !== content2) {
    var fig2 = document.getElementById("imgTwo");
    fig2.src = content2.path;
    var figCaption2 = document.getElementById("captionTwo");
    figCaption2.textContent = content2.reason;
    } else {
    tracker.loadImages(); //ask about this, might not be doing anything ---returns error sometimes
    }
  },

//should be able to make handleclick(2) one function right?
    handleClick: function (event) {
    var response = document.createElement("h3");
    var position = document.getElementById("captionOne")
    response.textContent = "You chose" + " " + content.name;
    position.appendChild(response);
    content.votes++;
    button();
    click.removeEventListener('click', tracker.handleClick); //instead of this, maybe treat images as radio buttons or something?
    click2.removeEventListener('click', tracker.handleClick2)
    },
    handleClick2: function () {
    var response = document.createElement("h3");
    var position = document.getElementById("captionTwo")
    response.textContent = "You chose" + " " + content2.name;
    position.appendChild(response);
    content2.votes++;
    button();
    click2.removeEventListener('click', tracker.handleClick2);
    click.removeEventListener('click', tracker.handleClick);
    },
  };


var content = tracker.generateRandom();
var content2 = tracker.generateRandom();

var click = document.getElementById("imgOne");
var click2 = document.getElementById("imgTwo");


var button = function () {                      //probably wrong button
  var form = document.createElement("form");
  var input = document.createElement("input");
  var position = document.getElementById("button");
  input.id = "newImages"
  input.type = "submit";
  input.name = "submit";
  input.value = "New Images";
  form.appendChild(input);
  position.appendChild(form);
};

// var handleButton = function(event) {
//   event.preventDefault();
//   tracker.loadImages();
//   var child = getElementById("submit");
//   var container = parent.parentNode;
//   container.removeChilde(child);
// };
// var clickButton = document.getElementById("newImages");


tracker.loadImages();

click.addEventListener('click', tracker.handleClick);
click2.addEventListener('click', tracker.handleClick2);
// clickButton.addEventListener('submit', handleButton);
