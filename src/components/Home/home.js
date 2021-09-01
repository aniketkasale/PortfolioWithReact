import { Link } from "react-router-dom";
import "./home.css"
import image from "../../assets/images/undraw_feeling_proud_qne1.svg"
import {FaRegHandPointRight} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa/';
import {FaEnvelope} from 'react-icons/fa/';
import {FaGithub} from 'react-icons/fa/';



function Home() {
  return (
    
    <div className="mainContainer">
    <br/>
    <div className="container">

         <nav>
        <div className="heading">
            <h3>iAmDeveloper</h3>
        </div>
        <ul>
            <li><Link to="/home" className="link active">Home</Link></li>
            <li><Link to="/projects" className="link">Projects</Link></li>
            <li><Link to="/blogs" className="link">Blogs</Link></li>
            <li><Link to="/more" className="link ">More</Link></li>
        </ul>
    </nav>
    <header>
    <img src={image} alt=""/>
        <br/>
        <h1 >
        <span style={{fontWeight: "600"}}>
          Hello, This is
          </span>
          <span style={{fontWeight: "800", color: "#2c3e50"}}> Aniket </span>
          <br/>
          <span style={{fontWeight: "600"}}>the</span> WebDeveloper</h1>
        <p style={{fontWeight: "600"}}>
          In my current job I am responsible for designing, coding and modifying WebApps, right from layouting to building the functionality as per the client's requirements. I strive to create visually beautiful WebApps that are extremely user-friendly and have brilliant user experience. I have hands-on experience with HTML, CSS, JS, and React JS, as well as Web Services (REST)
          </p>
    </header>
    <section>
        <h1>Technologies</h1>
        <p style={{fontWeight: "600"}}> <h3>I am Familiar With </h3><span className="skills"> HTML, CSS, JS, Bootsrap, Material UI & React</span></p>
    </section>
    <section>
        <h1>Education</h1>
        <p style={{fontWeight: "600"}}>I Have Completed My Graduation in<span style={{fontWeight: "800", color: "#2c3e50"}}> CSE</span> From <span style={{fontWeight: "800", color: "#2c3e50"}}> Savitribai Phule Pune University</span> with <br/> <span style={{fontWeight: "800", color: "#2c3e50"}}> First Class</span> Distinction</p>
    </section>
    <section>
        <h1>Projects</h1>
        <p style={{fontWeight: "600"}}>I like to show some of my<span style={{fontWeight: "800", color: "#2c3e50"}}> Projects</span></p>
        <Link to="/projects" className="link" ><FaRegHandPointRight style={{fontSize:"xx-large"}}/></Link>
    </section>
    <footer>
        <h3>Connect With Me</h3>
       <a target="_blank"  className="social" href="https://www.linkedin.com/in/aniket-kasale/"><FaLinkedinIn style={{fontSize:"xx-large"}}/> </a>
       <a target="_blank" className="social" href="https://github.com/aniketkasale"><FaGithub style={{fontSize:"xx-large"}}/></a>
       <a target="_blank" className="social" href="mailto:aniketkasale02@gmail.com"><FaEnvelope style={{fontSize:"xx-large"}}/></a>
       <h4 style={{fontWeight: "600"}}> Made By Aniket</h4>
    </footer>
    </div>
    <br/>
    </div>
  );
}

export default Home;
