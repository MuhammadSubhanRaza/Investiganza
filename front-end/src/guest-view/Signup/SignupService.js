

import Axios from 'axios';

const apiUrl = `http://localhost:5070/api/accounts/register`;


export async function signup(data)
{
    let result = null
    await Axios.post(apiUrl,data)
    .then((res)=>{
        result = res
    }
    ,(error)=>{
        result = error
    })
    return result
}

