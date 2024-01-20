import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const basicSchema = yup.object().shape({
  firstName:yup.string().required("required"),
  lastName:yup.string().required("required"),
  email: yup.string().email("please enter correct email").required(),
  password: yup.string().min(5).matches(passwordRules,{message:"do strong"}).required("required")
})