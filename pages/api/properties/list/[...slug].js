const parseString = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js')

// export default function propertyForRentHandler (req,res) {
//     const {slug} = req.query
//     var parser = new xml2js.Parser({explicitArray : false});
//     const data = fs.readFileSync(path.join(process.cwd(),'listing.xml'))
//     parser.parseString(data,function (err, results){
//     results = results.client.secondhandListing.property

//     const filteredProp = results.filter((property) => property.operation.$.type === slug)
//     filteredProp.length > 0 ?  res.status(200).json(filteredProp) : res.status(404).json({message: `No property for: ${slug} at the moment.` })
//      })
    
// }

export default function propertyForRentHandler (req,res) {
    var parser = new xml2js.Parser({explicitArray : false
    });
    const data = fs.readFileSync(path.join(process.cwd(),'listing.xml'))
    parser.parseString(data,function (err, results){
    results = results.client.secondhandListing.property

    const filteredProp = results.filter((property) => property.operation.$.type === req.query)
    filteredProp.length > 0 ?  res.status(200).json(filteredProp) : res.status(404).json({message: `No property for: ${req.query
            } at the moment.`
        })
    })
}

