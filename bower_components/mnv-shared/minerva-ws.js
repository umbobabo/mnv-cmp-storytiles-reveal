var express = require("express"), port = 3000, listenOnFreePort, grunt = require('grunt');

var app = express();
    //app.use(express.logger());
    app.set("view options", {layout: false});
    app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.render('index.html');
});
/*
  listenOnFreePort: Check avaible port to listen at and automatically run grunt
*/
function listenOnFreePort(){
  app.listen(port, function() {
    console.log('Port ' + port + ' is available.');
    // Automatically run Grunt
    grunt.tasks(['default']);
  })
  .on('error',
    function(err) {
      if (err.errno === 'EADDRINUSE') {
        var oldport = port;
        port++;
        console.log('Port ' + oldport + ' seems to be in use, I will try port ' + port );
        listenOnFreePort();
      } else {
        console.log(err);
      }
  });
}

listenOnFreePort();


console.log("@@@@@@8OOOOOO88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8OCooooCO8@@@");
console.log("@C:               :O@@@@@@@@@@@@@@@@@@C:               .O@");
console.log("@@@@@@@@@@.           :O@@@@@@@@@@O:          :@@@@@@@@@@@");
console.log("@@@@@@@@@8:           .o@@@@@@o.           C@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@8.              O@@C              :@@@@@@@@@@@@");
console.log("@@@@@@@@@@c   .o@@@@@8c     cc    .c8@@@@@o.   o@@@@@@@@@@");
console.log("@@@@@@@@@:         .C@@@8:      c@@@@O:         c@@@@@@@@@");
console.log("@@@@@@@@O   O@8.      8@@@C    O@@@@c      :@C   O@@@@@@@@");
console.log("@@@@@@@@o  .8@O       o@@@@O .@@@@@@       .@8   o@@@@@@@@");
console.log("@@@@@@@@O   C@@c.    :@8oo@@CO@@oo@@O.    .O@c   O@@@@@@@@");
console.log("@@@@@@@@@:   c@@@8O8@@C.  .8@@8    8@@@O@@@@:   c@@@@@@@@@");
console.log("@@@@@@@@@@o    .:occ.      :@8        :oo:     C@@@@@@@@@@");
console.log("@@@@@@@@@@@@o               Cc               C@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@O:             ..         .oC8@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@C.                            .c8@@@@@@@@@@@@@@@");
console.log("@@@@@@@8c   MINERVA IS READY ON PORT 3000   O@@@@@@@@@@@@@");