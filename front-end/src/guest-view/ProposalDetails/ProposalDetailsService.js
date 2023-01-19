

import Axios from 'axios';

const apiUrl = `http://localhost:5070/api/posts`;


export async function fetchDetails(id)
{
   let dt = {}
   await Axios.get(apiUrl+`/${id}`)
   .then(res=>{
      dt = res.data
   },error=>{
      return false
   })
   return dt
}

