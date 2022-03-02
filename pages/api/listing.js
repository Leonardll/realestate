// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const parseString = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');



export default function handler(req, res) {
  const data = fs.readFileSync(path.join(process.cwd(),'listing.xml'))
  parseString(data,function (err, results){
    console.log(results)
    res.status(200).json({results})
  })

}

