
import Axios from 'axios';

const apiUrl = "http://localhost:5070/api/categories";

export async function saveData(formData)
{
    await Axios.post(apiUrl,formData)
     .then(res=>{
        return res
     },
     error=>{
        return false
     })
}



