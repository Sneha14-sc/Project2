import React from 'react';
import './../App.css';
import myImage from './passportPhoto.jpg';

const Home = () => {
  return (
    <div className="introduction">
        <div >
            <h2>Sneha Choudhari</h2><br/>
            <p>I’m pursuing post graduate from Jain University for Full Stack Development Specialization. I’ve been working on various projects
                to be reconginzed as a Full Stack Web Developer through TrakLabs Bootcamp to boost my career. I am excited 
                to start my new journey in the world on creativity. </p>
            <p>Refer my profile on:
               <button type="button" class="btn btn-primary"><a href="https://www.linkedin.com/in/sneha-chaudhari-6294a3180" target="_blank">Linked-in</a></button>
                <button type="button" class="btn btn-primary"><a href="https://github.com/Sneha14-sc?tab=repositories" target="_blank">GitHub</a></button>
            </p>
        </div>
        <img src={myImage} alt="loading" className="img"/>
    </div>
)
}

export default Home;