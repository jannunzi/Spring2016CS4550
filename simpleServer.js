var express = require('express');
var app = express();
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.get('/hello', sayHello);

function sayHello(req, res) {
    res.send('hello world 123');
}

app.listen(port, ipaddress);