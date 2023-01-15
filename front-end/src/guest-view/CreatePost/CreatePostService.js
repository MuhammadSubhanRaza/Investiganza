
import Axios from 'axios';

const categoriesUrl = `http://localhost:5070/api/categories`;

const apiUrl = `http://localhost:5070/api/categories`;

export async function fetchAllCategories()
{
   let dt = []
   await Axios.get(categoriesUrl)
   .then(res=>{
      dt = res
   },error=>{
      return false
   })
   return dt
}



export async function saveRecord(formData)
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
