import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const basicSchema = yup.object().shape({
  firstName:yup.string().required("Bu xana mütləqdir"),
  lastName:yup.string().required("Bu xana mütləqdir"),
  email: yup.string().email(" Format yalnisdir").required("Bu xana mütləqdir"),
  password: yup.string().min(5).matches(passwordRules,{message:"Parol zəifdir"}).required("Bu xana mütləqdir")
})