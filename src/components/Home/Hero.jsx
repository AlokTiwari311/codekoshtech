import PrimaryButton from "../common/PrimaryButton";
// import heroImg from "../../assets/heroImg.png";
import heroImg2 from "../../assets/heroImg.jpg";
import { Link } from "react-router-dom";

const socialLinks = [
  { text: "Facebook", url: "https://www.facebook.com/Codekoshtech/" },
  { text: "Instagram", url: "https://www.instagram.com/Codekoshtech/" },
  { text: "Linkedin", url: "https://www.linkedin.com/company/codekoshtech" },
];

const Hero = () => {
  return (
    <section
      className="relative  top-0   left-0  h-[100vh] flex  ml-auto gap-12 justify-center items-center pt-[6vw]  md:pt-[5vh] w-screen  overflow-hidde"
      id="home"
    >
      <div
        className=" w-10 border-r border-gray-600  h-full bg-inherit z-[99] hidden md:block"
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-delay="600"
        data-aos-easing="ease-in-sine"
      >
        <ul className="relative h-full flex gap-8 justify-between items-center text-white   top-20 -rotate-90">
          {socialLinks.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500">
              <Link to={link.url} target="_blank">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="md:w-1/2 relative "
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1 className="text-4xl md:text-[4.5vw] leading-none mb-4  px-6 md:px-0">
          <span className="text-transparent  bg-clip-text  bg-gradient-to-r from-blue-700 to-sky-400">
            Welcome
          </span>{" "}
          to Code Kosh Tech
        </h1>
        <img
          src={heroImg2}
          alt="hero image "
          loading="eager"
          className="md:hidden  rounded-tr-[5rem] pr-4"
        />
        <p className=" text-white  text-[2vh] md:text-[1.3vw] font-light mt-6 md:mt-0 px-6 md:px-0">
          We're a creative marketing agency that prioritizes one thing above
          everything. We create, design & market to attract traffic and convert
          it through the goals your organization needs. Our team consists of ,
          Designers & Development, Marketing Specialists, and more. We
          collaborate as a team, providing the best, customized solutions to a
          variety of business organizations.
        </p>
        <PrimaryButton
          to={"#portfolio"}
          className={"mt-8 md:mt-4 ml-6 md:ml-0"}
        >
          Explore more
        </PrimaryButton>
      </div>
      <div
        className="w-12/4 hidden md:block !-overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src={heroImg2}
          alt="hero image"
          className=" rounded-tl-[5rem]"
          loading="eager"
        />
        {/* <img src={heroImg} alt="hero image" loading="eager" /> */}
      </div>
    </section>
  );
};

export default Hero;
