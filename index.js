const express =require('express');
var app = express();
/* ejs setting up*/
  app.set('view engine','ejs');
  app.use('/assests',express.static('assests'));
/*body-parser */
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());


const port = process.env.PORT
app.listen(port,function(port){
  console.log('server up and running');
});
