import React from 'react'
import './../App.css';
const About = () => {
  return (
    <>
    <div className="description">
        <h2>About me:</h2>
            <br/>
        <h5>Work Experience: 1.2 year, Job Role: Operation Executive</h5>
            <p>Infosys, Pune
            Joined as a fresher and completed training on basic concepts of Java, Python, SQL, and
            networking. After training, I was mapped to the INTEL project, the largest and very critical
            project where my work level was L2.
            </p>
        <h5>Education and Qualifications</h5>
            <ul>
            <li>Master's in Computer Application
                Jain University, Bangalore
                Pursuing an MCA degree with Full Stack development Specialization.
            </li>
            <li>Bachelor of Computer Science
                Nowrosjee Wadia College, Pune
                Completed my graduation degree in 2020 and scored 81%.
            </li>
            </ul>
        <h5>Skills:</h5>
        <p>HTML, CSS, BootStrap, React, Javascript, Node JS, Core Java, Advanced Java, SQL, AWS, Linux</p>
    </div>
    </>
  )
}

export default About