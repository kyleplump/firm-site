import React from 'react';
import { Row, Col } from 'antd';
import VisibilitySensor from 'react-visibility-sensor';
import aboutUsImg from '../../static/img/people-team.jpg';
import './AboutUs.css';

function visibilityChange(isVisible) {
    
    if(isVisible) {
        let img = document.querySelector(".about-us-img");
        let content = document.querySelector('.about-us-wrap');
        if(img !== null) {
            img.style.display = "block";
            img.classList.add('animate__animated', 'animate__slideInRight');
            content.style.display = "block";
            content.classList.add('animate__animated', 'animate__slideInLeft');
        }
    }
}

export default function AboutUs() {

    return (
        <> 
            <VisibilitySensor onChange={visibilityChange}>
                <Row id="about-us" className="row--full-height">
            
                    <Col  xs={24} sm={24} md={24} lg={12} xl={12}>
                    <section className="about-us-wrap">
                            <h1 className="about-us-wrap__heading">Who We Are</h1>
                            <p className="about-us-wrap__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra vel lacus quis eleifend. 
                                Proin sit amet velit sit amet sem convallis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed in metus at lectus tempus varius. Etiam hendrerit sapien ut tortor viverra, quis maximus nisl maximus.
                            </p>
                        </section>
                    </Col>
                    <Col  xs={24} sm={24} md={24} lg={12} xl={12}>
                        <img className="about-us-img" src={aboutUsImg} alt="About Us" />
                    </Col>
                    <div className="about-us-triangle-1"></div>
                    <div className="about-us-triangle-2"></div>
                    <div className="about-us-triangle-3"></div>
                    <div className="about-us-triangle-4"></div>
                    <div className="about-us-triangle-5"></div>
                </Row>
            </VisibilitySensor>
        </>
    );
}