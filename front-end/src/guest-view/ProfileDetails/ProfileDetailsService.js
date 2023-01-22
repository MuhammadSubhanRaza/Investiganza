import Axios from 'axios';

const profileUrl = `http://localhost:5070/api/profiles`;
const feedbackUrl = `http://localhost:5070/api/feedbacks`;

export async function getProfile(id)
{
    let dt = []
   await Axios.get(profileUrl+`/${id}`)
   .then(res=>{
        dt = res.data
    },error=>{
        return false
    })
    return dt
}

export async function postFeedback(formData)
{
   let isActionSuccesful = false
    await Axios.post(feedbackUrl,formData)
     .then(res=>{
         isActionSuccesful= true
     },
     error=>{
      isActionSuccesful = false
     })
     return isActionSuccesful
   }
