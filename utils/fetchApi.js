import axios from "axios";
import { useState } from "react";
//  export const baseUrl = 'https://bayut.p.rapidapi.com'


  
//   export const fetchApi = async (url) => {  
//       const { data } = await axios.get((url), {
//         headers: {
//             'x-rapidapi-host': 'bayut.p.rapidapi.com',
//             'x-rapidapi-key': process.env.NEXT_PUBLIC_BAYU_API
//           },
//       });
//       //console.log("result",data);
//       return data;
//   };
   export const fetchListing = async () => {
     
     const res = await fetch('/api/listing')
     const data = await res.json()
     console.log(data.results)
     return data.results;

   }
   fetchListing()