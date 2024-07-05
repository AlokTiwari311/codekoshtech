import PrimaryButton from "../common/PrimaryButton";
import ContactForm from "./ContactForm";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <section className="w-10/12 mx-auto relative py-20" id="contact">
      <h2 className="text-5xl font-medium text-center md:text-left">
        Contact Us
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-12 md:mt-0">
        <div className="md:w-1/3 w-full md:h-[70vh] mr-auto" data-aos="fade-right">
          <p className="text-lg text-center md:text-left">
            {` "Ready to turn your vision into reality or scale up your entrepreneurial journey? We're just a form away. Let's connect!"`}
          </p>
          <h4 className="text-4xl font-bold mt-12 text-center md:text-left">
            <span className="bg-gradient-to-r from-blue-700 to-sky-400 text-wrap">
              Ready
            </span>
            <br />
            for your <br />
            digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-400">
              success?
            </span>
          </h4>
          <div className="flex justify-center md:justify-start">
            <PrimaryButton to={'mailto:neerajjangid7528@gmail.com'} className={"mt-12 flex justify-center items-center gap-2"}>Email Us <MdMailOutline  className="text-xl"/> </PrimaryButton>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex items-center justify-center p-4 md:p-12">
            <div className="mx-auto w-full max-w-[550px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
