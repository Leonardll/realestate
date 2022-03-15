// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const parseString = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js')



export default function Propertyhandler(req, res) {
 
  var parser = new xml2js.Parser({explicitArray : false});
  const data = fs.readFileSync(path.join(process.cwd(),'listing.xml'))
  parser.parseString(data,function (err, results){

    results = results.client.secondhandListing.property
    
    res.status(200).json({results})
  })

}

