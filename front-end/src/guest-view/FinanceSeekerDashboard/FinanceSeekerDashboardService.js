

import Axios from 'axios';

const apiUrl = `http://localhost:5070/api/fsdashboard`;

export async function GetDashboardDetails(id)
{
   let dt = {}
await Axios.get(apiUrl+"/"+id).then(res=>{
    dt = res.data 
},
error=>{
    
}
)

return dt;
}

