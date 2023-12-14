import React from 'react';

const Education = () => {
  const Education = [
    {
      university: "Vellore Institute Of Technology",
      degree: "B.Tech- Computer Science of Engineering",
      duration: "2020 - Present",
      score: "CGPA: 8.26"
    },
    {
      university: "Nezamia Public School",
      degree: "Class XII",
      duration: "2020",
      score: "Percentage: 81%"
    },
    {
      university: "Open Minds a Birla School",
      degree: "Class X",
      duration: "2018",
      score: "Percentage: 78.16%"
    },
  ]
  return (
    <div className='mt-7'>
      <p className='text-2xl'>Education</p>
      <div className='border-t-2 my-2 border-black'></div>
      <div className='flex flex-col'>
        {Education.map((education, index) => (
          <div className='flex flex-col my-2' key={index}>
            <div className='flex justify-between'>
              <p className='font-bold text-lg'>{education.university}</p>
              <p className='italic'>{education.duration}</p>
            </div>
            <div className='flex justify-between'>
              <p>{education.degree}</p>
              <p>{education.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;