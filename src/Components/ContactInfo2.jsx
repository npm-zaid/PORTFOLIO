import React, { useState } from 'react';

const ContactInfo2 = () => {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8639fe29-bc93-43d5-a66d-0b9244f8d10f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully...");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


 
  return (
    <div className="contact-container  text-white h-screen flex flex-col justify-center">
      
      <h1 className='text-[8vw]  lg:text-5xl font-bold mb-16 text-[#FFDC00] relative'>CONTACT
      <span className='absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDC00] to-transparent '></span>
      </h1>

        <div className=" sm:text-[.9vw]  text-[3vw] grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 leading-6 ">
              Looking to start a project or you need consultation? Feel free to
              contact me.
            </p>
            <div className=''>

            <div className='flex gap-3 items-center group cursor-pointer'>

          <div className="group-hover:animate-bounce flex items-center justify-center">
            <i className="text-xl ri-map-pin-line text-[#FFDC00]" />
         </div>
         <p className="group-hover:translate-x-2 transition-all duration-400">Agra , india</p>
           </div>

           <div className='flex gap-3 items-center group cursor-pointer my-2 '>
          <div className=" flex items-center justify-center">
            <i className="text-xl ri-mail-send-line text-[#FFDC00]" />
         </div>
         <p className="group-hover:translate-x-2 transition-all duration-400">zaidcodes.404@gmail.com</p>
           </div>

           <div className='flex gap-3 items-center group cursor-pointer '>
          <div className=" group-hover:rotate-[30deg] transition-all duration-400 flex items-center justify-center">
            <i className="text-xl ri-phone-line text-[#FFDC00]" />
         </div>
         <p className="group-hover:translate-x-2 transition-all duration-400">9411903629</p>
           </div>
            
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="bg-[#222222] border border-[#333333] text-white px-4 py-2 rounded focus:outline-none focus:border-[#FFDC00]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="bg-[#222222] border border-[#333333] text-white px-4 py-2 rounded focus:outline-none focus:border-[#FFDC00]"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message..."
                rows="4"
                className="w-full bg-[#222222] border border-[#333333] text-white px-4 py-2 rounded mb-4 focus:outline-none focus:border-[#FFDC00]"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#FFDC00] text-black px-6 py-2 rounded hover:bg-[#e6c800] transition duration-300"
              >
                Send
              </button>
              <p className='text-[#FFDC00] sm:text-[.9vw] text-[2vw] leading-4 mt-8  w-1/2 '>{result}</p>
            </form>
          </div>

        </div>
  
    </div>
  );
};

export default ContactInfo2;