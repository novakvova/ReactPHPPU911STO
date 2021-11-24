
type AppProps = {
    label: string,
    field: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const InputGroup = ({label, field, onChange}: AppProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <input
        type="password"
        name={field}
        className="form-control"
        id={field}
        onChange={onChange}
      />
    </div>
  );
}; 

export default InputGroup;