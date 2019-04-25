import React from 'react';
import {HashRouter, Route, Link ,Switch } from "react-router-dom";
import Main from './Main'
import About from './About'
import Topic from './Topic'
export default class Home extends React.Component {
   
    render () {
        return (
            // 指定Hash路由， 根节点
            <HashRouter>
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

                    <hr />
                    {/* exact 是精准匹配 匹配到什么就显示什么组件 */}
                    {/* <Route path='/' exact component={Main}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/topic' component={Topic}></Route> */}
                    {/* Switch一旦匹配到合适的路由就不会往下匹配了（直接break）  */}
                    {/* <Switch>  
                        <Route path='/' component={Main}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topic' component={Topic}></Route>
                    </Switch> */}

                    
                    <Switch>  
                        <Route exact path='/' component={Main}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topic' component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}