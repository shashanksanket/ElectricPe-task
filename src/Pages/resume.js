import React from 'react';
import Header from  '../Components/Header'
import Education from  '../Components/Education'
import Experience from  '../Components/Experience'
import Projects from  '../Components/Projects'
import Extras from  '../Components/Extras'


const Resume = () => {
  return (
    <div className='flex flex-col justify-around font-serif'>
      <Header/>
      <Education/>
      <Experience/>
      <Projects/>
      <Extras/>
    </div>
  );
};

export default Resume;