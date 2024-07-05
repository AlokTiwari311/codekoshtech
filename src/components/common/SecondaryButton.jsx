/* eslint-disable react/prop-types */
import { HashLink as Link } from "react-router-hash-link";

const SecondaryButton = ({ to, children, className }) => {
  return (
    <button className="secondaryButton text-gray-50 relative leading-7 z-10 hover:text-gray-950 overflow-hidden rounded-full border-2 border-amber-300 py-2 px-6  bg-transparent after:bg-gradient-to-r from-pink-400 to-amber-300 hover:shadow-[2px_7px_14px_0px_#f6ae5549] ">
      <Link to={`${to}`} className={` ${className}`}>
        {children}
      </Link>
    </button>
  );
};

export default SecondaryButton;
