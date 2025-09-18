import './Input.css'

const Input = ({ label, ...props }) => {
    return (
      <div className="flex flex-col gap-1">
        {label && <label className="text-sm font-medium">{label}</label>}
        <input
          {...props}
          className="border rounded px-2 py-1 focus:ring-2 focus:ring-blue-400"
        />
      </div>
    );
  };
  
  export default Input;
  