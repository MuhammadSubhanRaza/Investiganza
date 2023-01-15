import Axios from 'axios';

const apiUrl = `http://localhost:5070/api/profiles`;


export async function fetchAllData()
{
    let dt = []
   await Axios.get(apiUrl)
   .then(res=>{
      dt = res
   },error=>{
      return false
   })
   return dt
}

