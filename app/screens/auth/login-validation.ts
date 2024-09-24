import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email/Username"),
  url: Yup.string().required().label("Url"),
  password: Yup.string().required().min(4).label("Password"),
});
