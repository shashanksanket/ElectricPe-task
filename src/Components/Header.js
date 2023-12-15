import React from 'react';
const Header = () => {
  const Headers= {
    name: "Shashank Sanket",
    personalEmail: "shashank.sanket014@gmail.com",
    officialEmail: "shashank.sanket2020@vitbhopal.ac.in",
    linkedinLink: "https://www.linkedin.com/in/shashank-sanket-89b30b209/",
    phoneNumber: "+91-7004834020"
  }
  return (
    <div>
      <div className='flex flex-wrap justify-between font-bold'>
        <p className='text-2xl'>{Headers?.name}</p>
        <p><i className="fa-solid fa-phone"></i> {Headers.phoneNumber}</p>
      </div>
      <div className='break-words'>
        <p><i className="fa-solid fa-envelope"></i> {Headers.personalEmail}</p>
        <p><i className="fa-solid fa-envelope"></i> {Headers.officialEmail}</p>
        <p><a href={Headers.linkedinLink}><i className="fa-brands fa-linkedin"></i> Linkedin Profile</a></p>
      </div>
    </div>
  );
};

export default Header;