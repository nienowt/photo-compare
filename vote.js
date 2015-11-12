var data = {
    labels: [],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
        }
      ]
    };

var images = [];

function Photo(name, reason, path){
  this.name = name;
  this.reason = reason;
  this.path = path;
  this.votes = 0;
  images.push(this);
  data.datasets[0].data.push(this.votes);
  data.labels.push(this.name);
};

var birdOne = new Photo("Chirples", "Chirples just realized her name is Chirples", "images/sadbird1.jpg");
var birdTwo = new Photo("Squawks", "Squawks can't find the error", "images/sadbird2.jpg");
var birdThree = new Photo("Weepy", "Weepy is just so sad", "images/sadbird3.jpg");
var birdFour = new Photo("Darren", "Darren wishes he could wear shoes", "images/sadbird4.jpg");
var birdFive = new Photo("Karl", "Karl has scurvy", "images/sadbird5.jpg");
var birdSix = new Photo("Big Bird", "Big Bird hates children", "images/sadbird6.jpg");
var birdSeven = new Photo("Carrol","Carrol can't dance", "images/sadbird7.jpg");
var birdEight = new Photo("Creepy Theodore", "Theodore just watched the episode of 'Saved by the Bell' where Jesse gets addicted to caffeine pills", "images/sadbird8.jpg");
var birdNine = new Photo("Jaime","Jaime is afraid of heights","images/sadbird9.jpg");
var birdTen = new Photo("Clif","Clif has a merge conflict","images/sadbird10.jpg");
var birdEleven = new Photo("Jean", "Jean has a terrible singing voice","images/sadbird12.jpg");
var birdTwelve = new Photo("Aleks","Aleks did not wake up early enough and missed the worm","images/sadbird11.jpg");

var checkLocal = function() {
  if (localStorage.chartData) {
    updateChart();
  }
};
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
    left.src = content.path;
    var figCaption1 = document.getElementById("captionOne");
    figCaption1.textContent = content.reason;
      while (content === content2) {
        content2 = this.generateRandom();
      }
    right.src = content2.path;
    var figCaption2 = document.getElementById("captionTwo");
    figCaption2.textContent = content2.reason;
  },

  handleClick: function (event) {
    var response = document.createElement("h6");
    if (event.target === left) {
    var position = document.getElementById("captionOne")
    response.textContent = "You chose" + " " + content.name + "!";
    content.votes++;
    } else if (event.target === right) {
    var position = document.getElementById("captionTwo")
    response.textContent = "You chose" + " " + content2.name + "!";
    content2.votes++;
    }
    position.appendChild(response);
    var toLocal = JSON.stringify(images);
    localStorage.setItem('chartData', toLocal);
    updateChart();
    document.getElementById('newImages').style.display = 'block';
    removeListener();
  },

  handleButton: function(event) {
    event.preventDefault();
    document.getElementById("newImages").style.display = 'none';
    tracker.newContent();
    tracker.loadImages();
    addListener();
  },
};

var left = document.getElementById("imgOne");
var right = document.getElementById("imgTwo");
var content = tracker.generateRandom();
var content2 = tracker.generateRandom();
var clickButton = document.getElementById("newImages");
var removeListener = function(){
  right.removeEventListener('click', tracker.handleClick);
  left.removeEventListener('click', tracker.handleClick);
};
var addListener = function() {
  left.addEventListener('click', tracker.handleClick);
  right.addEventListener('click', tracker.handleClick);
};

document.getElementById("newImages").style.display = 'none'; //hide button
clickButton.addEventListener('click', tracker.handleButton);
addListener();
tracker.loadImages();
//---------------chart----
var ctx = document.getElementById("myChart").getContext("2d");

var myBarChart = new Chart(ctx).Bar(data, {
    scaleLineColor: "white",
    scaleFontColor: "white",
});

var updateChart = function(){
  var getData = localStorage.getItem('chartData');
  var getDataParsed = JSON.parse(getData);
  console.log(getDataParsed);
  for (i=0; i < images.length; i++) {
images[i].votes = getDataParsed[i].votes;
myBarChart.datasets[0].bars[i].value = images[i].votes;
myBarChart.update();
  }
};
checkLocal();

//add new images
var form = document.getElementById('subImages');
var handleSub = function(event) {
  event.preventDefault();

    if ((!event.target.imageName.value) || (!event.target.reason.value) || (!event.target.url.value)) {
      return alert('Fill those fields!');
    }

    var birdName = event.target.imageName.value;
    var sadReason = event.target.reason.value;
    var imgLoc = event.target.url.value;

    var addBird = new Photo(birdName, sadReason, imgLoc);
};


form.addEventListener('submit', handleSub);
