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
      <div className='flex justify-between font-bold'>
        <p className='text-2xl'>{Headers?.name}</p>
        <p>{Headers.phoneNumber}</p>
      </div>
      <div>
        <p>{Headers.personalEmail}</p>
        <p>{Headers.officialEmail}</p>
        <p><a href={Headers.linkedinLink}>Linkedin</a></p>
      </div>
    </div>
  );
};

export default Header;