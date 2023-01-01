
import * as Yup from 'yup'


export const profileSchema = Yup.object({
    cNIC:Yup.string().min(12).max(15).required("CNIC is required filed"),
    address:Yup.string().min(2).max(200).required("Address is required field"),
    provinceResidence:Yup.number().required("Please select the province"),
    residenceCityId:Yup.number().required("Please select the city"),
    about:Yup.string().min(30).required("Please enter about yourself"),
    degree:Yup.string().required("Please select your qualification"),
    occupationId:Yup.number().required("Please select the occupation"),
    categoryId:Yup.number().required("Please select the province"),
});

