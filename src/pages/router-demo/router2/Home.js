import React from 'react';
import {Link } from "react-router-dom";

export default class Home extends React.Component {
   
    render () {
        return (
            // 指定Hash路由， 根节点
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/topic'>Topic</Link>
                    </li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}