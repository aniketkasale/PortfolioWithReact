import React from "react"
import Nav from "../nav/nav"
import "./more.css"
import image from "../../assets/images/undraw_certificate_343v.svg"
function More(params) {

    const container=(h,span,href)=>{
        return(
            <div class="container">
            <h2>
                {h}
            </h2>
            <span className="pSpan" >{span}</span>
            <p></p>
            <button><a target="_blank" href={href}>View</a></button> 
        </div>
        )
    }
    return(
        <div className="moreContainer">
        <br/>
        <Nav/>

            <img src={image} alt=""/>
            <h1 style={{color: "#f0f3f5"}}><span style={{color: "#babcbd"}}>#Re</span>sume</h1>
            <div class="container">
        <h2>
            Resume 
        </h2>
        
        <p></p>
        <button><a href="../../assets/Resume.pdf" download="">Download</a></button> 
        <button><a target="_blank" href="https://drive.google.com/file/d/1Vox1AIs512BL_POLEiAxjJGMjTU4BFQo/view?usp=sharing">View</a></button> 

    </div>
    <h1 style={{color: "#f0f3f5"}}><span style={{color: "#babcbd"}}>#My</span>Certificates</h1>
    {container("Internship Certificate","RapidEra Technologies Pvt. Ltd.","https://drive.google.com/file/d/176gnJe2x9EzHdxRXbXssuO0GkFKviCIl/view?usp=sharing")}
    {container("Capgemini Tech-Challenge","Capgemini","https://drive.google.com/file/d/1yal9spgpMwkt-3kFmC1Wk8faDXefqL3M/view?usp=sharing")}
    {container("Programming for Everybody (Getting Started with Python)"," University of Michigan ","https://drive.google.com/file/d/1ZzyOEn6rbRNd8fbAmOrqdz5Olspd0Kdf/view?usp=sharing")}
    {container("Personal Growth Hacking"," The Stage ","https://drive.google.com/file/d/1s5HK0mezLmeGaaWqwy2U9sd6th5_c_Lp/view?usp=sharing")}
    {container("Data Science Foundations"," IBM ","https://drive.google.com/file/d/1k5GkF9Ll8gAeEh7vc9mThD8KL37_RqTn/view?usp=sharing")}
    {container("Google Ads"," Mapping Skills Technology ","https://drive.google.com/file/d/1Kpy3nsf63s3Z8MVFvcUBPVTpqd-7en5n/view?usp=sharing")}
    {container("English Speaking","EngLingua","https://drive.google.com/file/d/16As2DxTDMUMVjO82pWM1SDaSf9jQDxz1/view?usp=sharing")}

        <br/>
        </div>
    )
}
export default More;