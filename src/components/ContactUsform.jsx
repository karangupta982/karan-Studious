import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';



const ContactUsForm = () => {
    const [loading, setLoading] = useState(false)
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitSuccessful },
    } = useForm()


    const submitContactForm = async (data) => {
      setLoading(true);
      const toastId = toast.loading("Sending...")
      try {
          const response = await fetch('https://karanstudious.onrender.com/send-email', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });
  
          if (!response.ok) {
              throw new Error('Failed to send email');
          }
  
          toast.success('Message sent successfully!');
      } catch (error) {
          console.error(error);
          toast.error('There was an error sending your message. Please try again later.');
      } finally {
          setLoading(false);
          toast.dismiss(toastId)
          reset();
      }
  };

    useEffect(() => {
      if (isSubmitSuccessful) {
        reset({
          email: "",
          firstname: "",
          lastname: "",
          message: "",
          phoneNo: "",
        })
      }
    }, [reset, isSubmitSuccessful])
  
    return (
      <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-richblack-800 p-8 rounded-xl text-white"
          >
            <h2 className="text-3xl font-bold mb-8 overflow-visible text-white">Send Message</h2>
            <form onSubmit={handleSubmit(submitContactForm)} className="space-y-6 overflow-visible">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-richblack-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("firstName", { required: "First name is required" })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-richblack-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("lastName", { required: "Last name is required" })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-richblack-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-richblack-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-black py-3 rounded-lg font-semibold   "
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
    )
  }

  export default ContactUsForm