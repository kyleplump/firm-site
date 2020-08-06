import React from 'react';
import { Row, Col } from 'antd';
import './Footer.css';

function Footer() {
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="footer">
                <p className="footer-text">Image attribution and copyright</p>
            </Col>
        </Row>
    )
}

export default Footer;