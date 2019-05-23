import React, {Component} from "react";
import {Typography, Row, Col, Avatar, Icon} from 'antd';
import style from './index.scss'
import avatar from "../Home/avatar.png";


const {Title, Paragraph} = Typography;

class Details extends Component {
    constructor(props) {
        super(props);
        let key = this.props.match.params.key;
        //TODO: axios根据key获取data

        this.state = {
            data: {
                "gender": '男',
                "qq": "1152811872",
                "nickname": "无约",
                "campus": "西校区",
                "grade": "17级",
                "skills": ["Python", "前端", "Linux"],
                "skills_want": ["啥都想学", "想学2", '想学3'],
                "wechat": "",
                "phone": "10000",
                "time": new Date().toDateString(),
                "views": "999+",
                "say": '说了点啥'
            },
            show_qq: false,
            show_wechat: false,
            show_phone: false
        }
    }

    render() {
        return (
            <div style={{margin: "20px 1.64%"}}>
                <Title level={3}>
                    详细信息
                </Title>
                <div className={style.container_card}>
                    <div className={style.header}>
                        <div className={style.avatar}>
                            <img className={style.avatar_img}
                                 src={this.state.data.qq ? "http://q.qlogo.cn/headimg_dl?dst_uin=" + this.state.data.qq + "&spec=100" : avatar}
                                 alt="头像"/>
                            {
                                this.state.data.gender === "男" ?
                                    <Icon type="man" className={style.icon_man}/> :
                                    <Icon type="woman" className={style.icon_woman}/>
                            }
                        </div>
                        <h3>
                            {this.state.data.nickname}
                        </h3>
                        <p className={style.campus_grade}>
                            {this.state.data.campus + " / " + this.state.data.grade}
                        </p>
                    </div>


                    <Row>
                        <Col sm={24} md={{span: 16}}>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col sm={4}>
                                            <span className={style.badge}>TA会</span>
                                        </Col>
                                        <Col sm={20}>
                                            {this.state.data.skills.map((skill) => (
                                                <span className={style.badge_item}>{skill}</span>
                                            ))}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col sm={4}>
                                            <span className={style.badge}>TA想学</span>
                                        </Col>
                                        <Col sm={20}>
                                            {this.state.data.skills_want.map((skill) => (
                                                <span className={style.badge_item}>{skill}</span>
                                            ))}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col sm={4}>
                                            <span className={style.badge}>留言</span>
                                        </Col>
                                        <Col sm={20}>
                                            <p className={style.say}>
                                                {this.state.data.say}

                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={24} md={8}>
                            <div className={style.link}>
                                <div className={style.title}>联系TA</div>
                                <Row>
                                    <Col sm={6}>
                                        <div className={style.key}>QQ</div>
                                    </Col>
                                    <Col sm={18}>
                                        <div className={style.value}>
                                            <Paragraph copyable>
                                                {this.state.data.qq}
                                            </Paragraph>
                                        </div>
                                    </Col>
                                </Row>

                                {this.state.data.wechat ? <Row>
                                    <Col sm={6}>
                                        <div className={style.key}>微信</div>
                                    </Col>
                                    <Col sm={18}>
                                        <div className={style.value}>
                                            <Paragraph copyable>
                                                {this.state.data.wechat}
                                            </Paragraph>
                                        </div>
                                    </Col>
                                </Row> : null}
                                {this.state.data.phone ? <Row>
                                    <Col sm={6}>
                                        <div className={style.key}>手机</div>
                                    </Col>
                                    <Col sm={18}>
                                        <div className={style.value}>
                                            <Paragraph copyable>
                                                {this.state.data.phone}
                                            </Paragraph>
                                        </div>
                                    </Col>

                                </Row> : null}
                                <div className={style.message}>
                                    请自行甄别信息可靠性,谨防上当受骗!
                                    <br/>
                                    推荐联系时注明“来自长大技能交换网”
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Details;