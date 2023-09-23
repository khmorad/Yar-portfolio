// Importing various icons from Material-UI library
import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";

// Importing required dependencies and components
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useState } from "react";

// Defining the Contact component as a default export
export default function Contact() {
  // State variables using useState hook
  const [mailSent, setMailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    // Extracting form data
    const { username, email, message } = e.target.elements;

    // Retrieving environment variables
    const { REACT_APP_SERVICEID, REACT_APP_TEMPLATE, REACT_APP_PUBLICKEY } = process.env;

    // Creating template parameters for email service
    const templateParams = {
      username: username.value,
      email: email.value,
      message: message.value,
    };

    // Sending email using emailjs
    emailjs
      .send(REACT_APP_SERVICEID, REACT_APP_TEMPLATE, templateParams, REACT_APP_PUBLICKEY)
      .then(
        (response) => {
          setMailSent(true);
          setLoading(false);
          toast.success("Message Sent Successfully!", {
            // Toast notification options
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setLoading(false);
          toast.error("Error occurred!", {
            // Toast notification options
          });
          console.log("FAILED...", err);
        }
      );
  };

  // Rendering the component
  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 mt-10 min-h-screen overflow-hidden"
    >
      {/* Section heading */}
      <div className="text-5xl font-bold" data-aos={"fade"}>
        Contact
      </div>
      <div className="flex flex-row">
        {/* Left column (Contact form) */}
        <div className="flex-auto  w-32 pl-10 overflow-visible">
          <form onSubmit={handleSubmit} data-aos={"slide-up"}>
            {/* Form elements */}
            <label className="block mb-2 text-2xl font-semibold mt-3 text-white ">
              Get in Touch
            </label>
            <hr className="border-cyan-700 border-2 w-1/3 mx-auto bg-cyan-700" />
            {/* Input fields */}
            {/* ... */}
            {/* Send Message button */}
            {/* ... */}
            {/* Sending... button (visible when loading) */}
            {/* ... */}
            {/* Message Sent button (visible when mailSent is true) */}
            {/* ... */}
          </form>
        </div>

        {/* Right column (Animation and Social Links) */}
        <div className="flex-auto w-80 flex flex-col justify-center text-center items-center gap-1">
          {/* Animation */}
          <div data-aos={"fade-left"}>
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets9.lottiefiles.com/packages/lf20_3rqwsqnj.json"
              style={{ width: "350px" }}
            />
          </div>

          {/* Follow Me section */}
          <div data-aos={"slide-up"} className="text-center">
            {/* Social media icons */}
            {/* ... */}
            {/* Copyright notice */}
            {/* ... */}
          </div>
        </div>

        {/* ToastContainer for displaying notifications */}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}
