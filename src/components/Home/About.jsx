import logo from "../../assets/logo.svg";
import clock from "../../assets/clock 1.png";
import VR from "../../assets/VR Array 1.png";
import Chart from "../../assets/Line Chart 1.png";
import Tilt from "react-parallax-tilt";

const cardsData = [
  {
    image: VR,
    heading: "Cutting Edge Technology",
    text: "Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.",
  },
  {
    image: Chart,
    heading: "Cross Device Compatibility",
    text: "Multi-device compatibility ensures that creating, viewing and providing quick and easy",
  },
  {
    image: clock,
    heading: "Tailer Mode Development",
    text: "Scalable and dynamic systems with the ever-changing trends to meet your dynamic business needs",
  },
];

const About = () => {
  return (
    <section className="md:text-center mt-20 pt-24 md:pt-0" id="about">
      <h2 className="text-center text-5xl font-medium mb-8 md:mb-0 ">
        About Us
      </h2>
      <img
        src={logo}
        alt="Codekoshtech"
        className="mx-auto my-8 hidden md:block "
        width={200}
        loading="lazy"
      />
      <p className="w-10/12 mx-auto text-lg">
        We are a result-driven company that primarily focuses on development and
        marketing. We prioritize important parameters and make data-driven,
        important choices. From strategic thinking to implementation, planning
        to production, we are professionals in converting innovative concepts
        into reality for your audience. We're flexible utilizing the correct
        resources at the right moment. Our Marketing & Development process
        provides industry-best timelines for creating new solutions and
        upgrading existing ones. <br />
      </p>
      <div className="mx-auto mt-8 w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Tilt key={index}>
            <div className="max-w-sm bg-gray-700 rounded overflow-hidden shadow-lg mx-auto my-4 items-center py-8 px-4 cursor-pointer relative after:bg-gray-800 animated-border-box ">
              <img className="h-1/2 mx-auto" src={card.image} alt="Card" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{card.heading}</h3>
                <p className="text-gray-100 text-base">{card.text}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent animated-border-box-glow"></div>
            </div>
          </Tilt>
        ))}
      </div>

      <p className="w-10/12 mx-auto text-lg py-10">
        We have collaborated with hundreds of clients from a variety of
        industries and throughout the world, and we will consult with you to
        genuinely get to the core of your business, assisting you in engaging
        with your consumers, driving sales, and achieving your objectives.
      </p>
    </section>
  );
};

export default About;
