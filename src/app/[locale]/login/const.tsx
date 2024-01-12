import * as yup from "yup";


export const basicSchema = yup.object().shape({
  email: yup.string().required("this field is required"),
  password: yup.string().required("this field is required")
})