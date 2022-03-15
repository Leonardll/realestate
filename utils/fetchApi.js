
 export const baseUrl = ' https://realestate-eosin-xi.vercel.app'


  
  export const fetchApi = async () => {  
      const res = await fetch(`${baseUrl}/api/listing`)
      const data = res.json()
     
      return data;
  };
  


export const getDetails = async(baseUrl) => {
    const res = await fetch(baseUrl)
    const data  = await res.json()
    
    return data
    
};

export const getProperties = async(baseUrl) => {
    const res = await fetch(baseUrl)
    const data  = await res.json()
    return data

}
