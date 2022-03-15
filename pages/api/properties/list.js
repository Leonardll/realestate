
const parseString = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js')
export default function propertyForRentHandler (req,res) {

    const {operationType, propertyType} = req.query
    
    var parser = new xml2js.Parser({explicitArray : false
    });
    const data = fs.readFileSync(path.join(process.cwd(),'listing.xml'))
    parser.parseString(data,function (err, results){
    results = results.client.secondhandListing.property
    
    const filteredProp = results.filter((property) => { 
        if (operationType) {
            
        }
        if (propertyType) {
        }
        return property.features.$.type === propertyType && property.operation.$.type === operationType
      
    })
    filteredProp.length > 0 ?  res.status(200).json({filteredProp, nbHits: filteredProp.length}) : res.status(404).json({message: `No ${propertyType ? propertyType : 'property'} for: ${operationType} at the moment.`
        })
    })
}