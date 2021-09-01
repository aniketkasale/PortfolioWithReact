import React from "react"
import Nav from "../nav/nav"
import "./projects.css"
import image from "../../assets/images/undraw_Project_completed_re_pqqq.svg"
function Projects(params) {

    const container=(h,span,p,href1,href2)=>{
        return(
            <div class="container">
        <h2>
           {h}
        </h2>
        <span className="pSpan" >{span}</span>
        <p>{p}</p>
        <button><a target="_blank" href={href1}> Live Demo</a></button> 
        <button><a target="_blank" href={href2}> Source Code</a></button> 
    </div>
        )
    }
    return(
        <div className="projectContainer">
            <br />
            <Nav/>
            <h1 style={{color: "#f0f3f5"}}><span style={{color: "#babcbd"}}>#My</span>Projects</h1>
            <img src={image} alt=""/>
            {container("Stocks Calculator",
            "markFourteen",
            "Tech Stack : HTML, CSS, JS",
            "https://stockscalc.netlify.app/",
            "https://github.com/aniketkasale/stocksCalc"
            )}

             {container("Check Your Birthday is Palindrome or not?",
            "markThirteen",
            "Tech Stack : HTML, CSS, JS",
            "https://checkbirthdaypalindrome.netlify.app/",
            "https://github.com/aniketkasale/CheckbirthdayPalindrome"
            )}

                {container("Fun With Triangles",
            "markTwelve",
            "Tech Stack : HTML, CSS, JS",
            "https://funtrianglesaniket.netlify.app/",
            "https://github.com/aniketkasale/Triangle"
            )}
                {container("Is Your Birthday Lucky",
            "markEleven",
            "Tech Stack : HTML, CSS, JS",
            "https://ismybirthdaylucky.netlify.app/",
            "https://github.com/aniketkasale/BirthdayLucky"
            )}
                {container("Cash Register",
            "markTen",
            "Tech Stack : HTML, CSS, JS",
            "https://cashregisteraniket.netlify.app/",
            "https://github.com/aniketkasale/Cash_Register"
            )}
                {container("Good Food",
            "markNine",
            "Tech Stack : HTML, CSS, JS, React",
            "https://x6wts.codesandbox.io/",
            "https://codesandbox.io/s/goodfood-x6wts?file=/src/App.js"
            )}
                {container("Know Your Emotions",
            "markEight",
            "Tech Stack : HTML, CSS, JS, React",
            "https://f4006.codesandbox.io/",
            "https://codesandbox.io/s/confident-dewdney-f4006?file=/src/App.js"
            )}   
             {container("Shakespear Speak",
            "markSeven",
            "Tech Stack : HTML, CSS, JS, API",
            "https://shakespearspeak.netlify.app/",
            "https://github.com/aniketkasale/Shakespear_Speak"
            )}  

             {container("Minion Speak",
            "markSix",
            "Tech Stack : HTML, CSS, JS, API",
            "https://miniontranslate1.netlify.app/",
            "https://github.com/aniketkasale/Minion_Speak"
            )} 

               {container("Portfolio",
            "markFour",
            "Made With Pure Html Css without Any Css Framework",
            "https://aniketk.netlify.app/",
            "https://github.com/aniketkasale/Portfolio"
            )}   
      <div className="container">
    <h2>
        Flash Quiz
    </h2>
    <span className="pSpan"  >markTwo</span>
    <p>This is My second CLI app. <br/> Let's play the flash quiz and check how much we know the flash</p>
    <button><a target="_blank" href="https://replit.com/@aniketkasale02/Flash#index.js?embed=1&output=1"> Play</a></button>
     <button><a href="https://github.com/aniketkasale/Flash-Quiz"> Source Code</a></button> 
</div>
<div class="container">
    <h2>
       Do You know Me ?
    </h2>
    <span className="pSpan"  >markOne</span>
    <p>Hello All this is my First CLI App!!! <br/> This a fun quiz app regarding my self. <br/>Let's play and let me know how much do you know me !!!</p>
    <button><a target="_blank" href="https://replit.com/@aniketkasale02/Do-You-Know-Me#index.js?embed=1&output=1"> Play</a></button> <button><a href="https://github.com/aniketkasale/Do-you-know-me"> Source Code</a></button> 
</div>
<div class="container">
    <h2>
        Institute Web-Template
    </h2>
    <p>
        Responsible For Developing UI With pure HTML CSS </p>
        <p> No any CSS framework like Bootstrap, Material UI, etc
    </p>
    <button><a target="_blank" href="https://institute-web.netlify.app/">Live Demo</a></button> 
<button><a target="_blank" href="https://github.com/aniketkasale/InstituteSiteTemplate"> Source Code</a></button> 

</div>
<div class="container">
    <h2>
        BLOG-APP-UI
    </h2>
    <p>
        Responsible for developing a React.js project using npx create-react-app environment with react-router and Bootstrap added.</p>
       <p> Tech Stack used – ReactJS, JavaScript, CSS, React-bootstrap, react-router-dom, React Hooks(useState, useEffect).</p>
    
<button><a target="_blank" href="https://www.linkedin.com/posts/aniket-kasale_javascript-html-css-activity-6802485715495202816-r_G_"> Demo</a></button> <button><a href="https://github.com/aniketkasale/Blog-App"> Source Code</a></button> 
</div>
<div class="container">
    <h2>
        Zomato Like UI With Pure HTML, CSS, and React.
    </h2>
    <p>
        Responsible For Developing UI With Pure HTML CSS</p> 
    <p>No any CSS framework like Bootstrap, Material UI, etc
    </p>
<button><a target="_blank" href="https://www.linkedin.com/posts/aniket-kasale_html-css-javascript-activity-6803332388412821504-_1gq"> Demo</a></button> <button><a href="https://github.com/aniketkasale/zomotoLikeUi"> Source Code</a></button> 
</div>   
<div class="container">
    <h2>
        Animated Login Form
    </h2>
    <p>
        Responsible For Developing UI With Pure HTML CSS </p>
        <p> No any CSS framework like Bootstrap, Material UI, etc
    </p>
<button><a target="_blank" href="https://codepen.io/aniketkasale/pen/JjWXQvE"> Source Code & Demo</a></button> 
</div>    
            <br/>
        </div>
    )
}
export default Projects;