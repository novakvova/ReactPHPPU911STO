import { useState } from "react";
import InputGroup from "../../common/InputGroup";
import { ILoginModel } from "./types";
import { useActions } from "../../../hooks/useActions";

const LoginPage: React.FC = () => {

    const {LoginUser} = useActions();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const [state, setState] = useState<ILoginModel>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmit(true);
    LoginUser(state);
    console.log("submit form", state);
    setIsSubmit(false);
  };

  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Вхід на сайті</h1>
          <InputGroup
            label="Пошта"
            field="email"
            type="email"
            onChange={handleChange}
          />

          <InputGroup
            label="Пароль"
            field="password"
            type="password"
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
