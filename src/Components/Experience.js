import React from 'react';
const Experience = () => {
  const Experience = [
    {
      company: 'Hevonic.ai',
      duration: 'June 23 - Present',
      role: 'Software Developer Intern - Remote',
      location: 'New York',
      description: [
        'Developed a robust application for user sign up and login on the AI interview platform.',
        'Developed REST APIs and MongoDB services, enabling scalable system design.'
      ],
      link: 'https://hevonic.ai'
    },
    {
      company: 'Comex Enggicon Private Limited',
      duration: 'April 23 - June 23',
      role: 'Software Developer Intern - Remote',
      location: 'New Delhi',
      description: [
        'Built a centralized customer management system to streamline data storage and access.',
        'Allowed employees to upload data, create tables, and perform data-related actions.',
        'Enhanced data organization, accessibility, and productivity for the company.'
      ],
      link: 'http://cms.comexcomputer.org'
    },
    {
      company: 'Hevonic.ai',
      duration: 'Aug 22 - Dec 22',
      role: 'Web Developer Intern - In Office',
      location: 'Bengaluru',
      description: [
        'Created an e-commerce platform for international users, serving over 1000 customers.',
        'Developed services, integrated payment processes, and calculated shipping costs.',
        'Designed UI components to enhance user interaction and satisfaction.'
      ],
      link: 'https://yourindiancart.com'
    }
  ]
  return (
    <div className=''>
      <p className='text-2xl'>Experience</p>
      <div className='border-t-2 border-black'></div>
      <div className='flex flex-col'>
        {Experience.map((experience, index) => (
          <div className='flex flex-col my-2' key={index}>
            <div className='flex flex-wrap justify-between'>
              <p className='font-bold text-lg'>•{experience.company}</p>
              <p className='italic'>{experience.duration}</p>
            </div>
            <div className='flex flex-wrap justify-between'>
              <p className='italic'>{experience.role}</p>
              <p>{experience.location}</p>
            </div>
            <div className='flex flex-col ml-1 justify-between'>
              {experience.description.map((desc, index) => (
                <p key={index}> – {desc}</p>
              ))}
              <p className='inline-block break-words'> – Live Link: <a href={experience.link}>{experience.link}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;