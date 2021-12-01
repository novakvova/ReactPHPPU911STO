import InputGroup from "../../common/InputGroup";
const RegisterPage = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
  };
  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <h1 className="text-center">Реєстрація на сайті</h1>
        <InputGroup
          label="Прізвище"
          field="surname"
          onChange={handleChange}
          type="text"
        />

        <InputGroup
          label="Ім'я"
          field="name"
          onChange={handleChange}
          type="text"
        />
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-secondary px-5"
            // disabled={loading}
          >
            Реєстрація
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
