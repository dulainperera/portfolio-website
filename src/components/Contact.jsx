import React from 'react';

const Contact = () => {
  return (
    <div className="border-t border-neutral-800 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">
          <a href="mailto:dulainp337@gmail.com" className= "text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out">
            dulainp337@gmail.com
          </a>
        </p>
        <p>&copy; 2025 Dulain Perera. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;