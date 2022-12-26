
import * as Yup from 'yup'


export const loginSchema = Yup.object({
    email:Yup.string().required("Please enter email"),
    password:Yup.string().required("Please enter password")
});



