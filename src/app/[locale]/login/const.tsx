import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().required("Bu xana mütləqdir"),
  password: yup.string().required("Bu xana mütləqdir"),
});
