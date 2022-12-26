import * as Yup from 'yup'


export const categorySchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter category name"),
    description:Yup.string().min(10).max(100).required("Please enter description")
});


