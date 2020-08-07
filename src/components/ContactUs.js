import React from 'react';
import './ContactUs.css';
import { Row, Col, Input } from 'antd';

const { TextArea } = Input;

function ContactUs() {

    return (
        <Row id="contact" className="contact-us-wrap row--full-height">
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="contact-us-wrap__col">
                <h1 className="contact-us__title">Let's Talk!</h1>
                <div className="form">
                    <Input className="form__element" type="text" size="large" placeholder="Your Name" />
                    <Input className="form__element" type="text" size="large" placeholder="Your Email" />
                    <TextArea className="form__element form__element--textarea" size="large" placeholder="Ask Us Anything!" />
                    <button className="form__element--btn">Send</button>
                </div>
            </Col>
        </Row>
    );
}

export default ContactUs;