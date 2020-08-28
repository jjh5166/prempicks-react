import * as yup from 'yup';

export const validationSchema = yup.object({
  fname: yup
    .string()
    .max(10),
  lname: yup
    .string()
    .max(20),
  team_name: yup
    .string()
    .max(20),
  email: yup
    .string()
    .email(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  password_confirmation: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Passwords don't match"
    ),
  current_password: yup
    .string()
    .required("Current Password is required to make changes")
});