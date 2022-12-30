import Axios from "axios"



const apiUrl = `http://localhost:5070/api/categories`;

export async function CheckForServiceAvailablity()
{
    let isAvailable = false
    await Axios.get(apiUrl)
    .then(res=>{
        isAvailable = true
    },error=>{
        isAvailable = true
    })
    return isAvailable
}