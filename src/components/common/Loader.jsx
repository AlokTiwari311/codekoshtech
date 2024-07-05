import logo from "../../assets/logo.svg";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen heroBg h-screen w-screen overflow-hidden z-[99] fixed top-0">
      <div className="loader ease-linear  w-1/2 mx-auto flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="h-20 w-20" />
      </div>
    </div>
  );
};

export default Loader;
