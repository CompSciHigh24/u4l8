const express = require("express");
const app = express();

let spaceData = [
  {
    name: "Mercury",
    distance: 57900000,
    diameter: 4879,
    imagePath: "/Mercury.jpg",
    description:
      "The smallest planet in our solar system and closest to the Sun.",
    orbital: 88,
  },
  {
    name: "Venus",
    distance: 108200000,
    diameter: 12104,
    imagePath: "/Venus.png",
    description:
      "A rocky planet known for its thick, toxic atmosphere and surface temperatures hot enough to melt lead.",
    orbital: 225,
  },
  {
    name: "Earth",
    distance: 149600000,
    diameter: 12742,
    imagePath: "/Earth.jpg",
    description:
      "The only planet known to support life, with vast oceans and diverse ecosystems.",
    orbital: 365,
  },
  {
    name: "Mars",
    distance: 227900000,
    diameter: 6779,
    imagePath: "/Mars.png",
    description:
      "Known as the 'Red Planet,' Mars has the tallest volcano and the largest canyon in the solar system.",
    orbital: 687,
  },
  {
    name: "Jupiter",
    distance: 778500000,
    diameter: 139820,
    imagePath: "/Jupiter.jpg",
    description:
      "The largest planet in the solar system, famous for its Great Red Spot and many moons.",
    orbital: 4333,
  },
  {
    name: "Saturn",
    distance: 1433000000,
    diameter: 116460,
    imagePath: "/Saturn.jpg",
    description:
      "Distinguished by its extensive ring system, Saturn is a gas giant with a stunning visual appearance.",
    orbital: 10759,
  },
  {
    name: "Uranus",
    distance: 2871000000,
    diameter: 50724,
    imagePath: "/Uranus.png",
    description:
      "An ice giant with a unique tilt, causing extreme seasonal changes during its orbit.",
    orbital: 30687,
  },
  {
    name: "Neptune",
    distance: 4495000000,
    diameter: 49244,
    imagePath: "/Neptune.png",
    description:
      "The furthest planet from the Sun, known for its deep blue color and strong winds.",
    orbital: 60190,
  },
];

app.use((req, res, next) => {
  console.log(req.method + req.url);
  next();
});

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Set up the /info/{id} path that renders planet.ejs based on index
// e.g. /info/0 sends back Mercury's info page

// Go into planet.ejs and plug in the attributes

// Set up the /api/{id} path that sends back the planet object based on index
// e.g. /api/0 sends back Mercury's object

// Set up the /image/{id} path that sends back the image file of the planet based on index
// e.g. /image/0 sends back Mercury's image

app.listen(3000, () => {
  console.log("Server running");
});
