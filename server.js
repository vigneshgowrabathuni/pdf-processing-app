const express = require('express');
const bodyParser = require('body-parser');
const busboy = require('connect-busboy')
const cors = require('cors');
const fs = require('fs');
const pdfSigner = require('node-pdfsigner')
const qpdf = require('node-qpdf');
var storeDB = require('.models/storeDB');

// Mongo DB Url
var url = 'mongodb://vignesh:welcome123@ds257698.mlab.com:57698/storedata';

mongoose.connect(url,function(err,db){
    console.log('Mongodb connected');
});

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(busboy());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/pdf-encrypt', (req, res) => {
    req.pipe(req.busboy);
    req.busboy.on('file', function(fieldname, file, filename) {

        // copying file to docs
        const fstream = fs.createWriteStream('./docs/' + filename); 
        file.pipe(fstream);

        fstream.on('close', function () {
            res.send('upload succeeded!');
        });

        //adding password protection to file
        /* const options = {
            keyLength: 128,
            password: '12345',
            restrictions: {
                modify: 'none'
            }
        }

        qpdf.encrypt('./docs/' + filename, options); */

        
        // adding digital sign to pdf
        /* const options = {
            name: 'John Doe',
            ip: '59.164.59.14',
            date: true,
            resultFilename: './docs/' + filename,
            color: "red"
        }

        pdfSigner('./docs/' + filename, options, function(err, output){
            if (err) console.log('callback: ', err)
            
            console.log(`Created signed PDF file: ${output}`)
        }); */
    });
});

router.route('/addStore')
.post(function(req,res){
  var form = req.body;
  storeDB.addingStore(form,function(err,result){
    if(err){
      res.send("sorry error found");
    }
    else{
      res.json(result);
    }
  })
})


app.listen(port, () => console.log(`Listening on port ${port}`));