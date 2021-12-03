import { useState } from "react";
import InputGroup from "../../common/InputGroup";
import { ILoginModel, LoginServerError } from "./types";
import { useActions } from "../../../hooks/useActions";
import { useFormik, Form, FormikProvider, FormikHelpers } from 'formik';
import { validationFields } from './validation';

const LoginPage: React.FC = () => {

    const {LoginUser} = useActions();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const initialValues: ILoginModel = { email: '', password: '' };

  const onHandleSubmit = async (values: ILoginModel, 
    {setFieldError} : FormikHelpers<ILoginModel>) => {

       try {
           setIsSubmit(true);
           console.log("Login begin form");
           await LoginUser(values);
           console.log("submit form", values);
           setIsSubmit(false);
       }catch(ex) {
          const serverErrors = ex as LoginServerError;
          if(serverErrors.password.length!=0)
          {
            console.log("problem ", serverErrors.password[0]);
            //console.log("REF formik: ", refFormik.current);
            //refFormik.current?.setFieldError("password", serverErrors.password[0]);
            setFieldError("password", serverErrors.password[0]);
          }
           console.log("problem form", serverErrors);

           setIsSubmit(false);
       }
     };
 
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationFields,
    onSubmit: onHandleSubmit
    
});

const { errors, touched, handleChange, handleSubmit, setFieldError } = formik;

  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
      <FormikProvider value={formik} >

        <Form onSubmit={handleSubmit}>
          <h1 className="text-center">Вхід на сайті</h1>
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
