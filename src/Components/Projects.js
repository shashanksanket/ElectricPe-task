import React from 'react';

const Projects = () => {
  const Projects = [
    {
      title: "Verdoc",
      duration: "July, 2023",
      techstack: "Web3.js",
      description: [
        'Designed and developed a blockchain-based application for document verification.',
        'Utilized Ethereum blockchain for secure document hashing and verification.',
        'Ensured data integrity and security through blockchain technology.'
      ],
      link: "https://github.com/shashanksanket/Verdoc"
    },
    {
      title: "User Portal",
      duration: "January, 2023",
      techstack: "Django",
      description: [
        'Developed a user portal with features like login/sign up and document uploading.',
        'Created Restful APIs for user interaction.',
        'Implemented document analysis and visualization to provide insights.'
      ],
      link: "https://15.207.109.189"
    },
    {
      title: "Project Apsis",
      duration: "January, 2022",
      techstack: "HTML,CSS,JavaScript",
      description: [
        'Designed an interactive India map-based platform.',
        'Provided real-time information on regional developments and resources.',
        'Simplified access to government updates and resources.'
      ],
      link: "https://shashanksanket.github.io/ProjectApsis/main"
    },
  ]
  return (
    <div className=''>
    <p className='text-2xl'>Personal Projects </p>
    <div className='border-t-2 border-black'></div>
    <div className='flex flex-col'>
    {Projects.map((projects, index) => (
        <div className='flex flex-col my-2' key={index}>
          <div className='flex justify-between'>
            <p className='font-bold text-lg'> – {projects.title}</p>
            <p>{projects.duration}</p>
          </div>
          <div className='flex justify-between'>
            <p className='italic mb-2 ml-4'>Techstack: {projects.techstack}</p>
          </div>
          <div className='flex flex-col ml-5 justify-between'>
            {projects.description.map((desc) =>(
              <p className=''> ∗ {desc}</p>
            ))}
            <p> ∗ Live Link: <a href={projects.link}>{projects.link}</a></p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Projects;