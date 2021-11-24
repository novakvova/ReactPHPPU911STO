import InputGroup from "../../common/InputGroup";
const RegisterPage = () => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
    }
  return (
    <>
      <h1>Реєстрація на сайті</h1>
      <InputGroup label="Прізвище" field="surname" onChange={handleChange} />

      <InputGroup label="Ім'я" field="name" onChange={handleChange} />
    </>
  );
};

export default RegisterPage;
