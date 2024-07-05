import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    const json = JSON.stringify(formObject);
    toast.info("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const jsonResponse = await response.json();
      if (response.status === 200) {
        toast.success(jsonResponse.message);
      } else {
        toast.error(jsonResponse.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      e.target.reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} data-aos="fade-left">
        <input
          type="hidden"
          name="access_key"
          value="652c3b8d-fa5e-4274-945c-f696c215a3e5"
        />
        <input type="hidden" name="from_name" value="New Inquiry Received" />
        <input
          type="hidden"
          name="subject"
          value="New Submission from Codekoshtech"
        />
        <input
          type="checkbox"
          name="botcheck"
          id=""
          style={{ display: "none" }}
        />
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-gray-100"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full rounded-md border-b focus:border-b bg-transparent py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-blue-500  focus:shadow-md"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-gray-100"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-md border-b py-3 px-6 text-base bg-transparent font-medium text-gray-400 outline-none focus:border-blue-500  focus:shadow-md focus:border-b"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-gray-100"
          >
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            required
            placeholder="Your Message"
            className="w-full resize-none rounded-md border-b focus:border-b bg-transparent py-3 px-6 text-base font-medium text-gray-400 outline-none focus:border-blue-500  focus:shadow-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-block text-white uppercase font-bold py-3 px-8 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent"
        >
          Submit
        </button>
      </form>
      <ToastContainer autoClose={1000} hideProgressBar closeOnClick />
    </>
  );
};

export default ContactForm;
