const parseString = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js')


// export default function handler (req,res) {
//     var parser = new xml2js.Parser({explicitArray : false});
//     const data = fs.readFileSync(path.join(process.cwd(),'listing.xml'))
//     parser.parseString(data,function (err, results){
//          results = results.client.secondhandListing.property
//       res.status(200).json({results})
//     })
// }

export default function propertyHandler ({query : {propertyId} } ,res) {
    var parser = new xml2js.Parser({explicitArray : false});
    const data = fs.readFileSync(path.join(process.cwd(),'listing.xml'))
    parser.parseString(data,function (err, results){
    results = results.client.secondhandListing.property

    const filteredProp = results.filter((property) => property.id === propertyId)
    filteredProp.length > 0 ?  res.status(200).json(filteredProp[0]) : res.status(404).json({message: `Property with id: ${propertyId} not found.` })
     })
    
}