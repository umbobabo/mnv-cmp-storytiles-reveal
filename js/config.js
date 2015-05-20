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
  "engines": {
    "node": ">=0.8.0"
  }
}
 };