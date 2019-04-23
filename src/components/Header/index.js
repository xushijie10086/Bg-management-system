import React from 'react';
import { Row, Col } from 'antd';
import "./index.less";
import utils from "../../utils/utils";
export default class Header extends React.Component {
    //#endregion
    state = {
        userName:'奔波儿灞',
        sysTime:''
    }
    componentDidMount() {
        setInterval(() => {
                let sysTime = utils.formateDate(new Date().getTime());
                this.setState({
                    sysTime
                })
        }, 1000);
    }

    render(){
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24} >
                        <span>{this.state.userName},欢迎你</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>

                <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span={20} className='weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-detail'>{'晴天'}</span>
                    </Col>
                </Row>
                
            </div>
        )
    }
}