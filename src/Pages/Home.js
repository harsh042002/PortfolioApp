import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
        <div className="about">
            <h2> Hi, My name is HARSH SHARMA </h2>
            <div className="prompt"><p>A software developer with a passion for learning and creating</p>
            <LinkedInIcon/>
            <EmailIcon/>
            <GitHubIcon/>
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>General</h2>
                    <span>DBMS, OOPS, Problem solving</span>
                </li>
                <li className="item">
                    <h2>Web-development</h2>
                    <span>MERN stack</span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>Java,C++,Python</span>
                </li>
            </ol>
            </div>
    </div>
  )
}

export default Home