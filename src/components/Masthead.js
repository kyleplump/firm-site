import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './Masthead.css';
import officeLogo from '../../static/img/people-office.jpg';

export default function Masthead() {

    useEffect(() => {

        // add the animation classes this way, to get around how animate.css positions elements
        // before the animation fires
        setTimeout(() => {
            let subTitle = document.querySelector(".company-announcement-wrap__sub-title");
            let button = document.querySelector(".reach-out-btn");
            if(subTitle !== null && button !== null) {
                subTitle.style.display = "block";
                subTitle.classList.add('animate__animated', 'animate__slideInLeft');
                button.style.display = "block";
                button.classList.add('animate__animated', 'animate__slideInLeft');
            }
          
          }, 800);
    }, []);

    return (
        <>
        <Row className="masthead-row row--full-height">
            <Col  xs={24} sm={24} md={24} lg={12} xl={12}>
                <section className="company-announcement-wrap">
                    <h1 className="company-announcement-wrap__name animate__animated animate__slideInLeft">COmpany</h1>
                    <h2 className="company-announcement-wrap__sub-title">
                        A Web Development And Design Company
                    </h2>
                    <button className="reach-out-btn" onClick={() => scrollTo('#contact')}>
                        Reach Out
                    </button>
                </section>
            </Col>
            <Col  xs={24} sm={24} md={24} lg={12} xl={12}>
                <img className="office-img animate__animated animate__slideInUp" src={officeLogo} alt="People Office" />
            </Col>
        </Row>
        </>
        
    );
}