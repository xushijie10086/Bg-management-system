import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Admin from "./admin";
import Buttons from './pages/ui/buttons'
import NoMatch from "./pages/nomatch";

export default class ERouter extends React.Component {
  render() {
    return (
      // 定义路由的方式  为hash
      <HashRouter>
        {/* 加载了根组件 APP  根组件只需要接纳所有的同级大组件 { this.props.children }*/}
        <App> 
            {/* login组件 与Admin 以及 后期的订单详情组件为同级组件 */}
            <Route path="/login" component={Login} />
            {/* Admin组件内嵌套子组件 */}
            <Route path="/admin" render={() => 
            <Admin> 
                {/* 子路由 */}
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route  component={NoMatch} />
            </Admin>}>
              
            </Route>
            <Route path="/order/detail" component={Login} />
            <Route  component={NoMatch} />
        </App>
      </HashRouter>
    );
  }
}
