import Axios from 'axios';

const apiUrl = `http://localhost:5070/api/community`;

export async function getAllProfiles()
{
    let dt = []
   await Axios.get(apiUrl)
   .then(res=>{
        dt = res.data
    },error=>{
        return false
    })
    return dt
}
