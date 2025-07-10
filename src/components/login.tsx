import hero from "../assets/hero.jpg";
import * as yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";

export const Login = () => {
  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(3, "Invalid name"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(3, "Invalid name"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const hanldeSubmit = (values: JSON) => {
    console.log(values)
  };
  return (
    <div className="flex flex-row gap-32">
      <img
        src={hero}
        alt="background-book-image"
        className="hidden lg:block w-[600px] h-screen "
      />

      <div className="p-8 flex flex-col gap-4 w-[400px]">
        <h1 className="flex justify-center">Join BookHaven for free</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={hanldeSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form className="flex flex-col gap-4">
              <Field
                name="firstName"
                placeholder="Your first name"
                className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
              />
              <ErrorMessage
                name="firstName"
                component="span"
                className="text-red-500"
              />
              <Field
                name="lastName"
                placeholder="Your last name"
                className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
              />
              <ErrorMessage
                name="lastName"
                component="span"
                className="text-red-500"
              />
              <Field
                name="email"
                placeholder="Your email"
                className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="text-red-500"
              />
              <Field
                name="password"
                placeholder="Create a password"
                className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
              />
              <ErrorMessage
                name="password"
                component="span"
                className="text-red-500"
              />
              <Field
                name="confirmPassword"
                placeholder="Confirm password"
                className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
              />
              <ErrorMessage
                name="confirmPassword"
                component="span"
                className="text-red-500"
              />
              <button
                type="submit"
                className="outline-none p-3 rounded-md bg-orange-400 text-white"
              >
              Submit
              </button>
            </Form>
          )}
        </Formik>
        <p className="flex justify-center mt-4">or sign up with</p>
        <div className="flex gap-10">
          <input
          type="button"
          value="Google"
          className="outline-none p-3 rounded-md bg-orange-400 text-white w-[150px]"
        />
        <input
          type="button"
          value="Facebook"
          className="outline-none p-3 rounded-md bg-orange-400 text-white w-[150px]"
        />
        </div>
        
      </div>
    </div>
  );
};

export default Login;
