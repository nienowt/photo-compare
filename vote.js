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
var birdEight = new Photo("Creepy Theodore", "What Theodore believed to be a mouse, was not.", "images/sadbird8.jpg");
var birdNine = new Photo("Jaime","Jaime is afraid of heights","images/sadbird9.jpg");
var birdTen = new Photo("Clef","Clef lost his job","images/sadbird10.jpg");
var birdEleven = new Photo("Jean", "Jean has a terrible singing voice","images/sadbird12.jpg")
var birdTwelve = new Photo("Aleks","Aleks did not wake up early enough to get the worm","images/sadbird11.jpg")

//generate images + responses to events
var tracker = {
  generateRandom: function() {
    return images[Math.floor(Math.random() * images.length)]
  },

  newContent: function() {
    content2 = this.generateRandom();
    content = this.generateRandom();
  },

  loadImages: function() {
    var fig1 = document.getElementById("imgOne");
    fig1.src = content.path;
    var figCaption1 = document.getElementById("captionOne"); //do while instead of if else
    figCaption1.textContent = content.reason;
      if (content !== content2) {
    var fig2 = document.getElementById("imgTwo");
    fig2.src = content2.path;
    var figCaption2 = document.getElementById("captionTwo");
    figCaption2.textContent = content2.reason;
    } else {
    this.newContent();
    this.loadImages();
    }
  },

  handleClick: function (event) {
    var response = document.createElement("h3");
    if (event.target === click) {
    var position = document.getElementById("captionOne")
    response.textContent = "You chose" + " " + content.name;
    content.votes++;
    console.log(content.name + " " + content.votes); //remove later
    } else if (event.target === click2) {
    var position = document.getElementById("captionTwo")
    response.textContent = "You chose" + " " + content2.name;
    content2.votes++;
    console.log(content2.name + " " + content2.votes);   //remove later
    }
    position.appendChild(response);
    document.getElementById('newImages').style.display = 'block';
    click2.removeEventListener('click', tracker.handleClick);
    click.removeEventListener('click', tracker.handleClick);
  },

  handleButton: function(event) {
    event.preventDefault();
    document.getElementById("imgOne").removeAttribute("src");
    document.getElementById("imgTwo").removeAttribute("src");
    document.getElementById("newImages").style.display = 'none';
    tracker.newContent();
    tracker.loadImages();
    click.addEventListener('click', tracker.handleClick);
    click2.addEventListener('click', tracker.handleClick);
  },
};

var content = tracker.generateRandom();
var content2 = tracker.generateRandom();
var click = document.getElementById("imgOne");
var click2 = document.getElementById("imgTwo");
var clickButton = document.getElementById("newImages");

document.getElementById("newImages").style.display = 'none'; //hide button
click.addEventListener('click', tracker.handleClick);
click2.addEventListener('click', tracker.handleClick);
clickButton.addEventListener('click', tracker.handleButton);
tracker.loadImages();

