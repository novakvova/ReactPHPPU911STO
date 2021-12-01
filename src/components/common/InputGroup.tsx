
type AppProps = {
    label: string,
    field: string,
    type: "text"|"email"|"password"
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const InputGroup = ({label, field, onChange, type="text"}: AppProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={field}
        className="form-control"
        id={field}
        onChange={onChange}
      />
    </div>
  );
}; 

export default InputGroup;