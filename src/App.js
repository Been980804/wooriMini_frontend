import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MemberManage from "./component/admin/MemberManage";
import ProductManage from "./component/admin/ProductManage";
import Landing from "./component/landing/Landing";
import ProductDetail from "./component/products/detail/ProductDetail";
import ProductList from "./component/products/ProductList";
import Subscriptions from './component/Subscriptions';
import Dashboard from "./component/admin/Dashboard";
import Template from "./component/template/Template";
import ProductRegister from './component/biz/ProductRegister';
import ProductManageBiz from './component/biz/ProductManageBiz';

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/products/:slug" component={ProductDetail} />
          <Route path="/admin/members" component={MemberManage} />
          <Route path="/admin/products" component={ProductManage} />
          <Route path="/member/subscriptions" component={Subscriptions} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/biz/register" component={ProductRegister} />
          <Route path="/biz/manage" component={ProductManageBiz} />
          {/* 추가적인 라우트 설정 */}
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
