import React from 'react';
import { Row, Col} from "antd";
export default class Admin extends React.Component {

    render(){
        return (
            <div>
                <Row>
                    <Col span={6} >6</Col>
                    <Col span={6} >6</Col>
                    <Col span={6} >6</Col>
                    <Col span={6} >6</Col>
                    <Col span={6} >6</Col>
                </Row>
                
            </div>
        )
    }

}