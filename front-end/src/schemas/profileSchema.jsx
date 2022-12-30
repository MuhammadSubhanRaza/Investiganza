
import * as Yup from 'yup'


export const profileSchema = Yup.object({
    firstName:Yup.string().min(2).max(25).required("First Name is required filed"),
    lastName:Yup.string().min(2).max(25).required("Last Name is required field"),
    email:Yup.string().required("Email is required field"),
    password:Yup.string().required("Password is required field"),
    // isInvestor:Yup.boolean().required("User type is required field")
    isInvestor:Yup.string().required("User type is required field")
});

