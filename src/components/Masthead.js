import React from 'react';
import { Row, Col } from 'antd';
import './Masthead.css';

export default function Masthead() {

    return (
        <Row className="masthead-row">
            <Col  xs={24} sm={24} md={24} lg={12} xl={12}>
                <h1>COmpany</h1>
                <h2>A Web Development And Design Company</h2>
                <button className="reach-out-btn">Reach Out</button>
            </Col>
            <Col  xs={24} sm={24} md={24} lg={12} xl={12}>
                <h1>Image</h1>
            </Col>
        </Row>
    );
}