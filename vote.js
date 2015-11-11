var images = [];

 function Photo(name, reason, path){
  this.name = name;
  this.reason = reason;
  this.path = path;
  this.votes = 0;
  images.push(this);
};

var birdOne = new Photo("Chirples", "Chirples just realized her name is Chirples", "images/sadbird1.jpg");
var birdTwo = new Photo("Squawks", "Squawks can't find the error", "images/sadbird2.jpg");
var birdThree = new Photo("Weepy", "Weepy is just so sad", "images/sadbird3.jpg");
var birdFour = new Photo("Darren", "Darren wishes he could wear shoes", "images/sadbird4.jpg");
var birdFive = new Photo("Kakaaa", "Kakaa is just kinda lonely", "images/sadbird5.jpg");
var birdSix = new Photo("Big Bird", "Big Bird hates children", "images/sadbird6.jpg");
var birdSeven = new Photo("Carrol","Carrol can't dance", "images/sadbird7.jpg");
var birdEight = new Photo("Creepy Theodore", "Theodore just watched the episode of 'Saved by the Bell' where Jesse gets addicted to caffiene pills", "images/sadbird8.jpg");
var birdNine = new Photo("Jaime","Jaime is afraid of heights","images/sadbird9.jpg");
var birdTen = new Photo("Clif","Clif has a merge conflict","images/sadbird10.jpg");
var birdEleven = new Photo("Jean", "Jean has a terrible singing voice","images/sadbird12.jpg")
var birdTwelve = new Photo("Aleks","Aleks did not wake up early enough and missed the worm","images/sadbird11.jpg")

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
    var response = document.createElement("h6");
    if (event.target === click) {
    var position = document.getElementById("captionOne")
    response.textContent = "You chose" + " " + content.name;
    content.votes++;
    } else if (event.target === click2) {
    var position = document.getElementById("captionTwo")
    response.textContent = "You chose" + " " + content2.name;
    content2.votes++;
    }
    position.appendChild(response);
    update();
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

//---------------chart----
var ctx = document.getElementById("myChart").getContext("2d");

var makeLabels = function(){
  var labels = [];
  for (i=0; i < images.length; i++) {
    labels.push(images[i].name);
  }
  return labels;
};

var makeData = function() {
  var data = [];
  for (i=0; i < images.length; i++) {
    data.push(images[i].votes);
  }
  return data;
};


var data = {
    labels: makeLabels(),
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: makeData(),
        }
      ]
    };

var myBarChart = new Chart(ctx).Bar(data, {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve : true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    scaleLineColor: "white",

    scaleFontColor: "white",

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

});

var update = function(){
  for (i=0; i < images.length; i++) {
myBarChart.datasets[0].bars[i].value = images[i].votes;
myBarChart.update();
  }
};
