import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const triggerEmail = async (data) => {
    await emailjs
      .send("service_wjmqpzj", "template_a5dlxtw", data, "OjsVVeDfhBZ7J37ZW")
      .then((success) => {
        alert("We will connect soon!");
      })
      .catch((error) => {
        alert("Error:", error);
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value
    };
    // console.log(data);
    triggerEmail(data);
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text  */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          {/* form  */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={formSubmit}
            action="#"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="input normal-case"
              />
              <input
                type="email"
                placeholder="Email"
                className="input normal-case"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input normal-case"
            />
            <textarea
              placeholder="Message"
              className="textarea normal-case"
            ></textarea>
            {/* <input type="submit" value={"submit"} /> */}
            <button
              type="submit"
              value={"Submit"}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Connect
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
