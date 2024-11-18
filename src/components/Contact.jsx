import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false)



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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-500" size={24} />,
      title: "Email",
      value: "gupta.karan.gh@gmail.com",
      link: "mailto:gupta.karan.gh@gmail.com"
    },
    {
      icon: <FaLinkedin className="text-blue-500" size={24} />,
      title: "LinkedIn",
      value: "karan-gupta10",
      link: "https://www.linkedin.com/in/karan-gupta10/"
    },
    {
      icon: <FaGithub className="text-blue-500" size={24} />,
      title: "GitHub",
      value: "karangupta982",
      link: "https://github.com/karangupta982"
    }
  ];

  return (
    <div className="bg-richblack-900 min-h-screen text-white py-20">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto px-4">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8 h-[7vh] ">Contact Information</h2>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-4 p-4 bg-richblack-800 rounded-lg hover:bg-richblack-700 transition-all"
              >
                {info.icon}
                <div>
                  <h3 className="font-semibold">{info.title}</h3>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-richblack-800 p-8 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-8 overflow-visible">Send Message</h2>
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
                className="w-full bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-black py-3 rounded-lg font-semibold    "
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;