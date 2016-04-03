var express = require('express');
var getKimInsta = require(__dirname + '/server_files/api')

var app = express();

//static file link
app.use(express.static(process.env.PUBLIC_DIR_PATH));


//basic route
app.get('/:page', function(request, response){

    if(request.url === '/play'){
      console.log('>>> /play');
      // kimsPhotos();
      getKimInsta(function(photos){
       console.log(photos);
       return photos;
       // res.end(photo);
     });


    }
    response.sendFile('index.html', {'root': 'src/client'});


});

// function kimsPhotos(req, res){
//   // res.writeHead(200, {"Content-Type":"text/html"});
//
//    return getKimInsta(function(photos){
//     return photos;
//     // res.end(photo);
//   });
//   console.log(photo);
// };

// var getInstaData = function(request, response){
//
//   res.writeHead(200, {"Content-Type":"text/html"});
//   apiRequest(function(photo){
//   res.end(photo);
//   }
// }

// app.get('/:page /play', function (request, response){
//   console.log("/play handler");
// });
//
// app.get('/test', function(request, response){
//   console.log('In express handler');
// });

// express app http listener
app.listen(process.env.PORT, function(){

   console.log(' sever listening for http on '+ process.env.PORT);
});
