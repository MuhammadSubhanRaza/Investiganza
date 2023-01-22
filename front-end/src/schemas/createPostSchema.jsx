
import * as Yup from 'yup'


export const createPostSchema = Yup.object({
    subject:Yup.string().required("This is required field"),
    description:Yup.string().required("This is required field"),
    amount:Yup.number().required("This is required field"),
    categoryId:Yup.number().required("This is required field")
});



