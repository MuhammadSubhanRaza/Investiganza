

import Axios from 'axios';

const apiUrl = `http://localhost:5070/api/proposals`;

export async function saveData(formData)
{
   let isActionSuccesful = false
    await Axios.post(apiUrl,formData)
     .then(res=>{
         isActionSuccesful= true
     },
     error=>{
      isActionSuccesful = false
     })
     return isActionSuccesful
   }

