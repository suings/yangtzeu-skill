import React, {Component} from 'react';
import style from './index.scss'
import {Row, Col, Input, Button,message} from "antd";

const {Search} = Input;

class index extends Component {
    render() {
        console.log("style",style)
        return (
            <div className={style.Nav}>
                <Row>

                    <Col sm={14}>
                        <a href="/">
                            <h1 className={style.title}>长江大学技能交换网</h1>

                        </a>
                    </Col>
                    <Col sm={10}>
                        <Row>
                            <Col sm={18}>
                                <Search placeholder="搜索技能"
                                        onSearch={value => alert(value)}
                                        style={{width: 200}}
                                >
                                </Search>
                            </Col>
                            <Col sm={6}>
                                <Button href='/new'>发布信息</Button>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default index;