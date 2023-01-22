
import * as Yup from 'yup'


export const loginSchema = Yup.object({
    email:Yup.string().required("Email is required field"),
    password:Yup.string().required("Password is required field")
});



