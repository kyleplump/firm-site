import React from 'react';
import servicesImg from '../../static/img/people-services.jpg';
import { Row, Col } from 'antd';
import VisibilitySensor from 'react-visibility-sensor';
import './Services.css';

function visibilityChange(isVisible) {
    
    if(isVisible) {
        let img = document.querySelector(".services-img");
        let content = document.querySelector('.services-wrap');
        if(img !== null) {
            img.style.display = "block";
            img.classList.add('animate__animated', 'animate__slideInLeft');
            content.style.display = "block";
            content.classList.add('animate__animated', 'animate__slideInRight');
        }
    }
}

export default function Services() {

    return (
        <VisibilitySensor onChange={visibilityChange}>
            <Row className="row--full-height">
                <Col  xs={24} sm={24} md={24} lg={12} xl={12}>
                    <img className="services-img" src={servicesImg} alt="Services Img" />
                </Col>
                <Col  xs={24} sm={24} md={24} lg={12} xl={12}>
                    <section className="services-wrap">
                        
                        <h1 className="services-wrap__heading">A Solution To Every Problem</h1>
                        <p className="services-wrap__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra vel lacus quis eleifend. 
                            Proin sit amet velit sit amet sem convallis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed in metus at lectus tempus varius. Etiam hendrerit sapien ut tortor viverra, quis maximus nisl maximus.
                        </p>
                    </section>
                </Col>
                <div className="triangle-1"></div>
                <div className="triangle-2"></div>
                <div className="triangle-3"></div>
                <div className="triangle-4"></div>
            </Row>
        </VisibilitySensor>
    );
}