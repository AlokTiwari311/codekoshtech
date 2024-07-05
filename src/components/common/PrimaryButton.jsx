/* eslint-disable react/prop-types */
import { HashLink as Link } from "react-router-hash-link";

const PrimaryButton = ({ to, children, className }) => {
  return (
    <Link 
      to={to}
      className={`inline-block text-white  uppercase font-bold py-3 px-8 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent  ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
