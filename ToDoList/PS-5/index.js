const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('Demo')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

demo.ejs:
