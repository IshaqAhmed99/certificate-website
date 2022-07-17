const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
var cors = require('cors');
const router = express.Router();
const port = process.env.PORT || 3000;
const serverless = require('serverless-http')
const fs = require('fs');




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
//Serves all the request which includes /orion-draco-02 in the url from public folder
app.use('/orion-draco-001', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/001.pdf'));
//Serves all the request which includes /orion-draco-02 in the url from public folder
app.use('/orion-draco-002', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/002.pdf'));
//Serves all the request which includes /orion-draco-03 in the url from public folder
app.use('/orion-draco-003', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/003.pdf'));
//Serves all the request which includes /orion-draco-04 in the url from public folder
app.use('/orion-draco-004', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/004.pdf'));
//Serves all the request which includes /orion-draco-05 in the url from public folder
app.use('/orion-draco-005', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/005.pdf'));
//Serves all the request which includes /orion-draco-06 in the url from public folder
app.use('/orion-draco-006', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/006.pdf'));
//Serves all the request which includes /orion-draco-07 in the url from public folder
app.use('/orion-draco-007', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/007.pdf'));
//Serves all the request which includes /orion-draco-08 in the url from public folder
app.use('/orion-draco-008', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/008.pdf'));
//Serves all the request which includes /orion-draco-09 in the url from public folder
app.use('/orion-draco-009', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/009.pdf'));
//Serves all the request which includes /orion-draco-10 in the url from public folder
app.use('/orion-draco-010', express.static(__dirname + '/public/resources/pdfs/ORION_DRACO_10/010.pdf'));


//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-055', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/055.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-056', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/056.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-057', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/057.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-058', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/058.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-059', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/059.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-060', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/060.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-061', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/061.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-062', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/062.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-063', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/063.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-064', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/064.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-065', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/065.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-066', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/066.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-067', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/067.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-068', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/068.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-069', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/069.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-070', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/070.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-071', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/071.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-072', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/072.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-073', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/073.pdf'))
//Serves all the request which includes /orange-metal-20 in the url from public folder
app.use('/orange-metal-074', express.static(__dirname + '/public/resources/pdfs/ORANGE_METAL_20/074.pdf'))

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


router.get('/document-validate/7df56-ce8ce-4fc84-cd569-be552-d5758-8a', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-055.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/9fd99-b4429-5ef3b-14a7d-d80d9-b8509-5d', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-056.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/f5435-d1c64-d4399-a4f40-4d8b3-779f1-86', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-057.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/c5537-b420c-c3657-ef7ba-6632e-495d6-5d', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-058.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/397e5-43aef-d687b-c9921-7cefb-998d6-63', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-059.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/41cd9-7bce7-e258a-d186f-e863f-e266b-00', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-060.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/60f54-98527-01a64-ef265-f549d-371eb-70', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-061.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/29fb9-d15e1-cd604-6ef69-89e19-45106-1e', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-062.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/f08f0-9c28a-17f3b-4481d-426b9-39e25-b1', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-063.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/450d0-24d84-f934b-13f62-8ea17-cd5ed-49', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-064.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/9ecc3-83404-9f975-62c53-f39d3-e948d-c0', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-065.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/13973-68e37-f9ebd-03784-9f6db-9c80f-90', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-066.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/a6a5c-3e150-9a580-c3ad2-b9e5b-25c80-7d', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-067.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/f4968-4d588-988b3-bb282-ad986-a7a76-41', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-068.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/9d169-a0670-a693c-62c56-181b1-87f4c-5c', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-069.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/c9088-28302-9e57a-01688-8f5fc-dba3f-25', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-070.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/31ee9-a0c6d-ee478-9e5a8-5232f-96a44-be', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-071.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/ba52b-619dd-bbd10-dd5f3-38e84-a1be9-73', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-072.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/08cec-eb093-c0b69-22076-6e58a-31ccd-fb', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-073.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/document-validate/7528b-c990e-9b086-374ed-305b6-14533-b7', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/htmls/orange-metal-074.html'));
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);

app.listen(port, () => {
    console.log("server listening to port " + port);
});

module.exports.handler = serverless(app);