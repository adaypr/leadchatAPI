

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// settings
app.set('port', process.env.PORT || 3001 );
app.use(morgan('combined'));
app.use(bodyParser.json());


const uuid = require('node-uuid');
const httpContext = require('express-http-context');


//var express_logger = require('express-logger-unique-req-id');

//Fecha
var f=new Date();
var meses;
if(f.getMonth()<9){
	meses = '0' + (f.getMonth() + 1);
}else{
	meses = (f.getMonth() + 1);
}
var stringDate =''+ f.getFullYear() + '' + meses + '' + f.getDate();

/*
//logger configuration
const fileConf = {
    level: 'debug',
    filename: '../../logs/logs_'+stringDate+'.log',
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    timestamp: true
};

const consoleConf = {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    timestamp: true
};

express_logger.initializeLogger(app, fileConf, consoleConf);
let logger = express_logger.getLogger();

logger.info('First message');
*/

app.use(httpContext.middleware);

let auth = require('./passport/authenticacion');
app.use(auth());


// routers
require('./routes/QuotationMockUpRoutes')(app);

var server = app.listen(app.get('port'), () => {
   console.log('server on port 3001');
   //logger.info('server on port 3001');
});
server.setTimeout(3000000); //20 minutos
