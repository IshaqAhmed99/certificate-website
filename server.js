const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
var cors = require('cors');
const router = express.Router();
const port = process.env.PORT || 3000 ;
const serverless = require('serverless-http')

//setting middleware
app.use(express.static(__dirname + 'public')); //Serves resources from public folder

//Serves all the request which includes /logo in the url from public folder
app.use('/logo', express.static(__dirname + '/public/resources/images/Logo.png'));

//Serves all the request which includes /min in the url from public folder
app.use('/min', express.static(__dirname + '/public/resources/adminlite/adminlite.min.css'));


//Serves all the request which includes /bootstrap-min in the url from public folder
app.use('/bootsrap-min', express.static(__dirname + '/public/resources/plugins/datatables-bs4/dataTables.bootstrap4.css'));

//Serves all the request which includes /bootstrap-min in the url from public folder
app.use('/css', express.static(__dirname + '/public/utils/css/main.css'));

//Serves all the request which includes /orion-draco-01 in the url from public folder
app.use('/orion-draco-001', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/001.pdf'));
//Serves all the request which includes /orion-draco-02 in the url from public folder
app.use('/orion-draco-002', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/002.pdf'));
//Serves all the request which includes /orion-draco-03 in the url from public folder
app.use('/orion-draco-003', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/003.pdf'));
//Serves all the request which includes /orion-draco-04 in the url from public folder
app.use('/orion-draco-004', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/004.pdf'));
//Serves all the request which includes /orion-draco-05 in the url from public folder
app.use('/orion-draco-005', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/005.pdf'));
//Serves all the request which includes /orion-draco-06 in the url from public folder
app.use('/orion-draco-006', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/006.pdf'));
//Serves all the request which includes /orion-draco-07 in the url from public folder
app.use('/orion-draco-007', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/007.pdf'));
//Serves all the request which includes /orion-draco-08 in the url from public folder
app.use('/orion-draco-008', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/008.pdf'));
//Serves all the request which includes /orion-draco-09 in the url from public folder
app.use('/orion-draco-009', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/009.pdf'));
//Serves all the request which includes /orion-draco-10 in the url from public folder
app.use('/orion-draco-010', express.static(__dirname + '/public/resources/pdfs/ORION DRACO 10/010.pdf'));


//User CORS for cors policy
app.use(cors())

// Allowing X-domain request
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
app.use(allowCrossDomain);

//Parse requests of content-type
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

router.get('/document-validate/71566-1e418-13aa0-3c612-327ef-ad36c-15', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/document-validate/3aaa5-50312-3f053-46170-ff2c7-f15dc-d2', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-02.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/document-validate/eab20-d21c2-1ad4a-bbe94-cdea4-44c05-07', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-03.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/67c97-aaa65-214b5-acb32-05c7e-58132-80', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-04.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/1f7be-782a2-ea6c7-a0f11-8b85a-40eb3-89', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-05.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/e25f2-56142-08fc4-8e5d6-59916-5a1a2-3e', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-06.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/a01ee-45d79-f6c7a-084c0-5a691-cf439-31', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-07.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/a53d7-9489b-2c335-840a4-1d176-3f888-8d', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-08.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/5b566-95ac6-04549-b35ab-6595b-7bf93-5e', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-09.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/3d729-2156b-6ebf0-9c07f-e508b-9b55e-a2', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orion-draco-10.html'));
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);

app.listen(port,()=>{  
    console.log("server listening to port "+port);
});

module.exports.handler = serverless(app);