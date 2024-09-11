"use client";
import { toast, Zoom, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
// import { Fox } from "@/models/Fox";
import Oreo from "@/models/Oreo";
import LoaderModel from "@/components/LoadingModel";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Arpit Vaghela",
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_TO_EMAIL,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_API_KEY
      )
      .then(
        () => {
          setLoading(false);
          // showAlert({
          //   show: true,
          //   text: "Thank you for your message 😃",
          //   type: "success",
          // });
          toast(
            "Your message was sent successfully. Thanks for reaching out! 🍰",
            {
              position: "top-center",
              autoClose: 5000,
              className: "text-md",
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Zoom,
            }
          );

          setTimeout(() => {
            // hideAlert(false);
            // setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          // setCurrentAnimation("idle");
          toast.error(
            "😢 Oops! Something went wrong. Try sending your message again later.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Zoom,
            }
          );
          // showAlert({
          //   show: true,
          //   text: "I didn't receive your message 😢",
          //   type: "danger",
          // });
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <section className="relative flex lg:flex-row flex-col justify-center max-container">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get in Touch</h1>
          <h2 className=" text-xl text-[#74512D] mt-4">
            As a token of appreciation for your visit, enjoy this virtual oreo
            cupcake on me! Thanks for stopping by!
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 mt-14"
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="John"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="John@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows="4"
                className="textarea"
                placeholder="Write your thoughts here..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn-brown"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending..." : `Let's Connect! 🚀`}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={3} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
            />

            <Suspense fallback={<LoaderModel />}>
              {/* <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            /> */}
              {/* <Sundae /> */}
              <Oreo />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Contact;
