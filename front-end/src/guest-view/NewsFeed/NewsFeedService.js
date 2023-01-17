
import Axios from 'axios';

const apiUrl = `http://localhost:5070/api/posts`;
const categoriesUrl = `http://localhost:5070/api/categories`;


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