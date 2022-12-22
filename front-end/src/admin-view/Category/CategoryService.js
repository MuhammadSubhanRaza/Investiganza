
import Axios from 'axios';

const apiUrl = `http://localhost:5070/api/categories`;

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

export async function deleteData(id)
{
   let isActionSuccesful = false
   await Axios.delete(apiUrl+`/${id}`)
   .then(res=>{
      isActionSuccesful = true
   },error=>{
      isActionSuccesful = false
   })
   return isActionSuccesful
}

export async function updateData(formData)
{
   let isActionSuccesful = false
   await Axios.put(apiUrl+`/${formData.id}`,formData)
   .then(res=>{
      isActionSuccesful = true
   },error=>{
      isActionSuccesful = false
   })
   return isActionSuccesful
}



