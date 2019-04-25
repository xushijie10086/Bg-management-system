import React from 'react';
import { HashRouter as Router, Route ,Switch} from 'react-router-dom'
import Main from './Main'
import About from './../router1/About'
import Topic from './../router1/Topic'
import Home from './Home'
import Info from './info';
import NoMatch from './NoMatch'
// const NoMatch = () => {
//     return (
//         <div>
//             No Match , SomeThing is Wrong ?!
//         </div>
//     )
// }
export default class IRouter extends React.Component {
    render () {
        return (
            <Router>
               <Home>
                    <Switch>
                        <Route  path='/main' render={() => 
                            <Main>
                                {/* 动态路由传参 :mainId */}
                                <Route path='/main/:mainId' component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path='/about' component={About}></Route>
                        {/* exact 这样不会访问 '/about' 这个路由了，只会访问 '/about/abc' 这个路由了 */}
                        <Route exact path='/about/abc' component={<div>abc</div>}></Route>
                        <Route path='/topic' component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
               </Home>
            </Router>
        );
    }
}