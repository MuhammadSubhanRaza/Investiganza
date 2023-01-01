



import Axios from 'axios';

const categoryUrl = `http://localhost:5070/api/categories`;
const occupationUrl = `http://localhost:5070/api/occupations`;
const citiesUrl = `http://localhost:5070/api/cities`;
const apiUrl = `http://localhost:5070/api/profiles`;


export async function fetchCatgories()
{
   let dt = []
   await Axios.get(categoryUrl)
   .then(res=>{
      dt = res
   },error=>{
      return false
   })
   return dt
}

export async function fetchOccupations()
{
   let dt = []
   await Axios.get(occupationUrl)
   .then(res=>{
      dt = res
   },error=>{
      return false
   })
   return dt
}

export async function fetchCities()
{
   let dt = []
   await Axios.get(citiesUrl)
   .then(res=>{
      dt = res
   },error=>{
      return false
   })
   return dt
}


