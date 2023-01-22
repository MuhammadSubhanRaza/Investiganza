
import * as Yup from 'yup'


export const createProposalSchema = Yup.object({
    amount:Yup.number().required("This is required field"),
    message:Yup.string().required("This is required field")
});



