import React from 'react';
import { Row, Col} from "antd";
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';
// import Home from './pages/home'
// import Router from "./pages/router-demo/router3/router";
export default class Admin extends React.Component {

    render(){
        return (
            <div>
                <Row className='container'>
                    <Col span={3} className='nav-left'>
                        <NavLeft />
                    </Col>
                    <Col span={21} className='main'>
                        <Header />
                        <Row className='content'>

                            {this.props.children}
                            {/* <Home /> */}
                            {/* <Router/> */}
                        </Row>
                        <Footer />
                    </Col>
                    
                </Row>
                
            </div>
        )
    }

}