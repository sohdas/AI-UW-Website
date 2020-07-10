import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';

let slideIndex;

const showSlides = () => {
    slideIndex = slideIndex ? slideIndex : 0;
    var i;
    var slides = document.getElementsByClassName("slide-item");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if(slides.length === 0) return;

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000);
};

const About = () => {
    useEffect(()=> {
        slideIndex = 0;
        showSlides();
    });

    return (
        <Container>
            <Typography variant="h5">
                About Us
            </Typography>        
            <p>
                AI@UW is a student organization at the University of Wisconsin – Madison committed to educating and bringing together students of all backgrounds with an interest in Artificial Intelligence. Artificial intelligence, far from being science fiction, is a technology with the potential to transform the economy and improve our lives. AI@UW aims to build a community at UW around a common interest in Artificial Intelligence. Starting as half a dozen students in the Fall of 2017, we have since attracted over 350 students of all skill levels and backgrounds; from freshmen to grad students, any and all students are welcome to join. <br/><br/>
                AI@UW offers regular public events which are the perfect opportunity to learn more about AI or meet others with a shared interest in AI. For members who want to gain experience using machine learning tools or simply want to add to their project portfolios, we always have a number of exciting project groups which you can join. Past project groups have built tools to identify skin tumors using computer vision, predict the movement of the stock market using reinforcement learning, generate novel music using recurrent neural networks, and more! If you don’t have much programming experience or are unfamiliar with machine learning but want to learn more, several study groups meet regularly to discuss topics related to AI or work through MOOC’s together. Past study groups have worked through Andrew Ng’s Machine Learning course, discussed the relationship between neuroscience and AI, and read Sutton’s reinforcement learning textbook.
            </p>
            <div class="slideshow-container">
                <div class="slide-item fade">
                    <img src="images/logos/google.png" height={150} alt="Google"/>
                </div>
                <div class="slide-item fade">
                    <img src="images/logos/facebook.png" height={150} alt="Facebook"/>
                </div>
                <div class="slide-item fade">
                    <img src="images/logos/stanford.png" height={150} alt="Stanford"/>
                </div>
                <div class="slide-item fade">
                    <img src="images/logos/amazon.png" height={150} alt="Amazon"/>
                </div>
                <div class="slide-item fade">
                    <img src="images/logos/acm.png" height={150} alt="ACM"/>
                </div>
            </div>
            <br/>
            <div 
                style={{
                    textAlign: "center",
                }}
            >
                <span class="dot"></span> 
                <span class="dot"></span> 
                <span class="dot"></span> 
                <span class="dot"></span> 
                <span class="dot"></span> 
            </div>

            <p>
                We are committed to building an excellent community for the members of the AI club and should you join us, you will join a group of driven individuals
                and form relationships with your fellow AI club members that will last a lifetime. Please <a href="mailto:aiclubuwmadison@gmail.com">contact</a> us if you have any questions.
            </p>
        </Container>
    );
}

export default About;