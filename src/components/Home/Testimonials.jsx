import { useState, useEffect } from "react";
import testimonialsData from "../../utils/testimonialData";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setActiveTestimonial(
          (prevIndex) => (prevIndex + 1) % testimonialsData.length
        );
        setAnimationClass("fade-in");
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleTestimonialChange = (testimonialIndex) => {
    if (testimonialIndex !== activeTestimonial) {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setActiveTestimonial(testimonialIndex);
        setAnimationClass("fade-in");
      }, 1000);
    }
  };

  return (
    <section
      className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative my-20 px-4 md:px-0"
      id="testimonial"
    >
      <div className="w-full md:w-4/12 h-[40vh] md:h-[55vh] overflow-hidden rounded  mb-8 md:mb-0 ">
        <img
          className={`${animationClass} rounded-tr-[120px]   h-[40vh] md:h-[55vh] w-full`}
          src={testimonialsData[activeTestimonial].image}
          alt={`Testimonial by ${testimonialsData[activeTestimonial].author}`}
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-6/12 relative text-center md:text-left">
        <div className={animationClass}>
          <h2 className="text-3xl md:text-5xl font-medium">Testimonials</h2>
          <h4 className="text-gray-400 text-xl md:text-2xl font-medium mt-4 md:mt-8">
            {testimonialsData[activeTestimonial].company}
          </h4>
          <h4 className="text-gray-50 text-xl md:text-2xl font-medium">
            {testimonialsData[activeTestimonial].author}
          </h4>
          <p className="text-gray-200 text-lg  md:text-xl leading-7 mt-4">
            <RiDoubleQuotesL className="inline-block mr-2 -mt-2" />{" "}
            {testimonialsData[activeTestimonial].text}
            <RiDoubleQuotesR className="inline-block ml-2 -mb-2" />
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/12 flex md:flex-col justify-center items-center md:gap-4 mt-8 md:mt-0">
        <p className="text-white text-lg md:text-[32px] font-bold font-['Fira Sans'] mr-4 md:mr-0  md:mb-0">
          01
        </p>
        <div className="flex flex-row md:flex-col gap-2 md:gap-4 justify-center items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`h-[2px] md:h-[83px] w-[83px] md:w-0.5  md:bg-gradient-to-b cursor-pointer rounded-lg bg-gradient-to-r  ${
                activeTestimonial === index
                  ? "from-blue-700 to-sky-400"
                  : "from-gray-50 to-gray-100  "
              } shadow`}
              onMouseEnter={() => handleTestimonialChange(index)}
              onClick={() => handleTestimonialChange(index)}
            />
          ))}
        </div>
        <p className="text-white text-lg md:text-[32px] font-bold font-['Fira Sans'] ml-4 md:ml-0 mt-0">
          03
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
