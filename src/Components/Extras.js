import React from 'react';

const Extras = () => {
  const Extras = {
    languages: 'Python,Javascript',
    skills: 'Node.js React HTML CSS Python Feather]s NextJs VueJs Django MongoDB PostgreSQL Web3.js.'
  }
  return (
    <div className=''>
    <p className='text-2xl'>Technical Skills and Interests</p>
    <div className='border-t-2 my-2 border-black'>
      <p><span className='font-bold'>Languages: </span>{Extras.languages}</p>
      <p><span className='font-bold'>Skills: </span>{Extras.skills}</p>
    </div>
    
  </div>
  );
};

export default Extras;