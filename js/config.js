var ecStoryTilesRevealConfig = {
 "config" : {
  "bundle": {
    "assets": { 
      "version": "theWorldIf2015001",
      "host": "cdn.static-economist.com"                          
    },
    "data": {
      "version": "theWorldIf2015001",
      "url[THIS-OVERWRITE-HOST-IN-JSON-JSONP-BUNDLE]": "http://YOUR-JSON-URL",
      "host": "localhost:3000/projects/ec-storytilesreveal",
      "host[PRODUCTION-RENAME-TO-HOST]": "cdn.static-economist.com",
      "provider": "inbundle"
    }
  }
},
 "minerva" :{
  "name": "StoryTilesReveal",
  "ns": {
    "js": "ecStoryTilesReveal",
    "css": "ec-storytilesreveal",
    "folder": "ec-storytilesreveal"
  },
  "description": "",
  "version": "0.1.0",
  "debugMode": true,
  "private": true,
  "devDependencies": {
    "bower": "~1.2.7",
    "express": "^4.10.6",
    "express-handlebars": "^1.1.0",
    "express-logger": "0.0.3",
    "grunt": "~0.4.1",
    "grunt-contrib-copy": "^0.8.0",
    "grunt-browser-sync": "^1.5.3",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-jasmine": "0.5.1",
    "grunt-contrib-jshint": "0.6.4",
    "grunt-contrib-uglify": "~0.2.4",
    "grunt-contrib-watch": "^0.6.1",
    "grunt-githooks": "~0.2.0",
    "grunt-handlebars-compiler": "0.0.7",
    "grunt-sass": "0.6.0",
    "grunt-shell": "~0.5.0",
    "grunt-usemin": "~0.1.12",
    "grunt-criticalcss": "^0.5.0",
    "yeoman-generator": "^0.18.4"
  },
  "engines": {
    "node": ">=0.8.0"
  }
}
 };