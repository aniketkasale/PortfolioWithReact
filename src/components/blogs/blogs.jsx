import React from "react"
import Nav from "../nav/nav";
import "./blog.css"
import image from "../../assets/images/undraw_about_me_wa29.svg"
function Blogs(params) {
    return(
        <div className="blogContainer">
            <br />
            <Nav/>
            <h1 style={{color: "#f0f3f5"}}><span style={{color: "#babcbd"}}>#Bl</span>ogs</h1>
            <img src={image} alt=""/>
            <div className="container">
            <h2>
            Some Important Properties Of CSS
        </h2>
        <h3><b>Font</b></h3>
        <p>Fonts overall refer to the presence of text in your web app. There are a couple of things to pay special mind to like font has a shorthand. Do take note that it is entirely expected to see the font shorthand declaration just a single time in the entire CSS document. It is entirely expected to utilize the various properties at different times:</p>
        <p>body( <br/>
    font: italic small-caps bold 20px/1.5 helvetica, arial, sans-serif;
    ) <br/>
</p>
<p><b>font-style:</b> Style of the font. valid values are either italic or normal. Defaults to normal</p>
<p><b>font-variant:</b> variant of the font. valid values are normal and small caps. Defaults to normal.</p>
<p><b>font-weight:</b> weight of font. determines if text is bold. valid values are normal, bold, bolder, or 100 - 900</p>
<p><b>font-size:</b> size of font.</p>
<p><b>line-height:</b> determines the amount of space above and below the text.</p>
<p><b>font-family:</b> specifies a list of fonts</p>
<br/>
<h3><b>Background</b></h3>
<p>body ( <br/>
    background:transparent image-url('image.png') left top no-repeat; <br/>
)</p>
<p><b>background-color:</b> color of the background. Takes #hex value or an rgb value</p>
<p><b>background-image:</b> url(URI). Takes on the path to your image.</p>
<p><b>background-repeat: sets how background images are repeated.</b></p>
<p><b>background-position:sets the initial position for each background image.</b></p>
<br/>
<h3><b>Border</b></h3>
<p>div( <br/>
    border: 1px solid black;  <br/>)</p>
<p><b>border-width :</b> width of the border.</p>
<p><b>border-style :</b> style of the border. Usual values are solid and dashed.</p>
<p><b>border-color :</b> color of the border</p>
<br/>
<h3><b>Margin and Padding</b></h3>
<p><b>Margin</b> is the space around an element's border. while <b>padding</b> is the space between an element's border and the element's content.</p>
<p>div( <br/>
    margin: 20px  10px 20px 10px; <br/>)  <br/>- (TOP, Right, Bottom, Left)</p>
    <br/>
    <h3><b>Display</b></h3>
    <p>div ( <br/>
        display: block; <br/>
        display: inline-block; <br/>
        display: inline; <br/>
        display: none; <br/>
    )</p>
    <p> block means that the element is displayed as a block</p>
    <p>inline-block: used to display an element as an inline-level block container.</p>
    <p>inline means that the element is displayed inline, inside the current block on the same line.</p>
    <p>none means that the element is not displayed at all </p>
    <br/>
    <h3>
        Centering a Div
    </h3>
    <p><b>Centering a div was very challanging for in initial days, infact now also I stuck some times. <br/>So Here are some methods which we can use</b></p>
    <p>1. Using FlexBox - css: .div-container(display:flex; justify-content:center; (horizontal center))</p>
    <p>2. Using CSS Transform - css: .div-container(position:relative) <br/>(innerDiv).element(position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);)</p> 
    <p>3. Using Margin:0 auto; - css: .div-container(position:relative; width:100px; height:100px; margin:0 auto;)</p>
        


            </div>
            <div class="container">
        <h2>
            Roadmap to Front-End 
        </h2>
        
        <p>Gain proficiency with the Basics. Each Web Developer should have an must have a basic understanding of HTML, CSS, and JavaScript.</p>
       
        <p>At the point when you feel alright with HTML and CSS, the time has come to move forward. 

            learn how to use Maps, Fonts and Icons in HTML. 
            
            On the JavaScript side, learn how to get to the HTML DOM. 
            
            you should also learn about API integration.</p> 
            
        <p> <b>Choose Frameworks.</b>On the CSS side you should choose a framework for reponsive web design <br/><b>Bootstrap  ,  Material Design , or etc. </b> <br/> On the JavaScript side  <br/><b>React.js  ,  Angular.js  ,  Vue.js</b></p>
    <p>Learn from Experts <br/>
        Due to the nature of a web developer’s job, it pays to stay on top of all the latest trends and developments in the industry. An easy way to do this is to follow web development experts.</p>
    </div>
            <br />
            
        
        </div>
    )
}
export default Blogs;