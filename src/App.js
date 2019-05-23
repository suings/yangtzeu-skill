import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import {Layout} from 'antd';

import Home from './pages/Home'
import New from './pages/New'
import Nav from "./pages/Nav";
import Details from './pages/Details'

import style from './App.scss'

const {Header, Footer, Content} = Layout;

const setTitle = title => document.title = title;

export default function AppRoute() {
    return (
        <div>
            <Layout className="layout">
                <Header style={{backgroundColor: '#1890ff'}} >
                    <Nav/>
                </Header>
                <Content className={style.content} >
                    <Router>
                        <Route exact path="/" component={Home} onEnter={setTitle("技能交换网")}/>
                        <Route path="/new" component={New} onEnter={setTitle("发布技能")} />
                        <Route path="/d/:key" component={Details} onEnter={setTitle("详细信息")} />
                    </Router>
                </Content>
                <Footer style={{textAlign: 'center'}}>技能交换网©2019 Created by SU</Footer>
            </Layout>
        </div>

    );
}