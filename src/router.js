import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import FormLogin from "./pages/form/login";
import FormRegister from "./pages/form/register";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings/loadings";
import Notifications from "./pages/ui/notifications";
import Messages from "./pages/ui/messages";
import Tabs from './pages/ui/taps';
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousel";
import BasicTable from "./pages/table/basicTable";

export default class ERouter extends React.Component {
  render() {
    return (
      // 定义路由的方式  为hash
      <HashRouter>
        {/* 加载了根组件 APP  根组件只需要接纳所有的同级大组件 { this.props.children }*/}
        <App>
          <Switch>
            {/* login组件 与Admin 以及 后期的订单详情组件为同级组件 */}
            <Route path="/login" component={FormLogin} />
            {/* Admin组件内嵌套子组件 */}
            <Route
              path="/admin"
              render={() => (
                <Admin>
                  {/* 子路由 */}
                  <Switch>
                    <Route path="/admin/ui/buttons" component={Buttons} />
                    <Route path="/admin/ui/modals" component={Modals} />
                    <Route path="/admin/ui/loadings" component={Loadings} />
                    <Route path="/admin/ui/notifications" component={Notifications} />
                    <Route path="/admin/ui/messages" component={Messages} />
                    <Route path="/admin/ui/taps" component={Tabs} />
                    <Route path="/admin/ui/gallery" component={Gallery} />
                    <Route path="/admin/ui/carousel" component={Carousels} />
                    <Route path="/admin/form/login" component={FormLogin} />
                    <Route path="/admin/form/reg" component={FormRegister} />
                    <Route path="/admin/table/basic" component={BasicTable} />
                    <Route component={NoMatch} />
                  </Switch>
                </Admin>
              )}
            />
            <Route path="/order/detail" component={FormLogin} />
            <Route component={NoMatch} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
