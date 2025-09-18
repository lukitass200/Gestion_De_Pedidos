import './Card.css'

const Card = ({ children }) => {
    return (
      <div className="bg-white shadow p-4 rounded">
        {children}
      </div>
    );
  };
  
  export default Card;
  