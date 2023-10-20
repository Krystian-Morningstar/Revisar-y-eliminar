const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

const Data_Test1 = require ('./assets/3A_TEST1.json');
const Data_Test2 = require ('./assets/3A_TEST2.json');
const Data_Test3 = require ('./assets/3A_TEST3.json');
const Data_Test4 = require ('./assets/3A_TEST4.json');

app.get('/', (req, res, next) => {
	res.send('node express api <br> by Rodrigo');
});


app.get('/1a_proxy_size', (req, res, next) => {
  res.sendfile("assets/1a_proxy_size.json");
});

app.get('/1a_dev_hours', (req, res, next) => {
	res.sendfile("assets/1a_dev_hours.json");
  });

app.get('/3A_TEST1', (req, res) => {
	res.json(Data_Test1);
  });

app.get('/3A_TEST2', (req, res) => {
	res.json("Data_Test2.json");
  });

app.get('/3A_TEST3', (req, res) => {
	res.json(Data_Test3);
  });

app.get('/3A_TEST4', (req, res) => {
	res.json(Data_Test4);
  });

app.listen(port,  () => 
	console.log('listening on port ' + port
));
