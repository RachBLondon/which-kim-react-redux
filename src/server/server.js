
//express

var express = require('express');
var app = express();

//static file link
app.use(express.static(process.env.PUBLIC_DIR_PATH));


//basic route
app.get('/:page', function(request, response){

    response.sendFile('index.html', {'root': 'src/client'});

});


// express app http listener
app.listen(process.env.PORT, function(){
   console.log(' sever listening for http on '+ process.env.PORT);
});




