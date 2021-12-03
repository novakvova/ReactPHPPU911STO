import { useState } from "react";
import InputGroup from "../../common/InputGroup";
import { ILoginModel } from "./types";
import { useActions } from "../../../hooks/useActions";
import { useFormik, Form, FormikProvider } from 'formik';
import { validationFields } from './validation';

const LoginPage: React.FC = () => {

    const {LoginUser} = useActions();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const [state, setState] = useState<ILoginModel>({
    email: "",
    password: "",
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const initialValues: ILoginModel = { email: '', password: '' };

 // const handleSubmit = async (e: React.FormEvent) => {
  const onHandleSubmit = async (values: ILoginModel) => {
    //   e.preventDefault();
    console.log("values submit: ", values);
    return;
       try {
           setIsSubmit(true);
           console.log("Login begin form");
           await LoginUser(state);
           console.log("submit form", state);
           setIsSubmit(false);
       }catch(ex) {
           console.log("problem form");
           setIsSubmit(false);
       }
     };
 
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationFields,
    onSubmit: onHandleSubmit
    
});

const { errors, touched, handleChange, handleSubmit } = formik;

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
