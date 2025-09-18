import './Select.css'

const Select = ({ children, ...props }) => {
    return (
      <select
        {...props}
        className="border rounded px-2 py-1 focus:ring-2 focus:ring-blue-400"
      >
        {children}
      </select>
    );
  };
  
  export default Select;
  