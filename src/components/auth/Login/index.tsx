import { useState } from "react";
import InputGroup from "../../common/InputGroup";
import { ILoginModel, LoginServerError } from "./types";
import { useNavigate } from "react-router";
import { useActions } from "../../../hooks/useActions";
import { useFormik, Form, FormikProvider, FormikHelpers } from "formik";
import { validationFields } from "./validation";

const LoginPage: React.FC = () => {
  const { LoginUser } = useActions();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<string>("");

  const navigator = useNavigate();

  const initialValues: ILoginModel = { email: "", password: "" };

  const onHandleSubmit = async (
    values: ILoginModel,
    { setFieldError }: FormikHelpers<ILoginModel>
  ) => {
    try {
      setIsSubmit(true);
      
      await LoginUser(values);

      setIsSubmit(false);
      navigator("/");
    } catch (ex) {
      const serverErrors = ex as LoginServerError;

      Object.entries(serverErrors).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          let message = "";
          value.forEach((item) => {
            message += `${item} `;
          });
          setFieldError(key, message);
        }
      });
      if(serverErrors.error)
      {
        setInvalid(serverErrors.error);
      }

      setIsSubmit(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationFields,
    onSubmit: onHandleSubmit,
  });

  const { errors, touched, handleChange, handleSubmit /*, setFieldError*/ } = formik;

  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <h1 className="text-center">Вхід на сайті</h1>
            {invalid && <div className="alert alert-danger">{invalid}</div>}
            <InputGroup
              label="Пошта"
              field="email"
              type="email"
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
            />

            <InputGroup
              label="Пароль"
              field="password"
              type="password"
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
            />

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-info px-5"
                disabled={isSubmit}
              >
                Вхід
              </button>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default LoginPage;
