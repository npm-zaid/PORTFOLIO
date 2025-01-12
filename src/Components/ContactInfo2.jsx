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
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending an email
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
    alert("Message sent successfully!");
  };*/

  return (
    <div className="contact-container bg-[#111111] text-white p-8 md:p-16 lg:p-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
      <h1 className='text-4xl lg:text-5xl font-bold mb-16 text-[#FFDC00] relative'>CONATCT
      <span className='absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDC00] to-transparent '></span>
      </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 text-[.9vw]">
              Looking to start a project or you need consultation? Feel free to
              contact me.
            </p>
            <div className='text-[.9vw]'>
              <p className="mb-2">San Francisco, CA, USA</p>
              <p className="mb-2">lucas@email.com</p>
              <p className="mb-2">www.framer.website</p>
            </div>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  className="bg-[#222222] border border-[#333333] text-white px-4 py-2 rounded focus:outline-none focus:border-[#FFDC00]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="jane@framer.com"
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
              <p className='text-[#FFDC00] text-[.9vw] mt-8  w-1/2 '>{result}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo2;