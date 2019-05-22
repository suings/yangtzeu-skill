import React, {Component} from 'react';
import {Col, Row, Typography, Avatar, Icon,Button} from 'antd';
import avatar from './avatar.png'
import style from './index.scss'
const {Title} = Typography;

class Card extends Component {
    render() {
        console.log("card props", this.props);
        const {info, skill, link, time, views} = this.props.data;

        var genderIcon = null;
        if (info.gender === "男") {
            genderIcon = <Icon type="man" style={{backgroundColor: "#1890ff"}} className={style.icon} />
        } else if (info.gender === "女") {
            genderIcon = <Icon type="woman" style={{backgroundColor: "#ed8585"}} className={style.icon}/>
        }

        return (
            <a href="/" style={{color: '#000'}} target="_blank">
                <div className={style.card}>
                    <div className={style.card_header}>
                        <div className={style.headimg}>
                            <Avatar style={{verticalAlign: 'middle'}}
                                    size="large" src={
                                link.qq ? "http://q.qlogo.cn/headimg_dl?dst_uin=" + link.qq + "&spec=100" : avatar
                            }>
                                头像
                            </Avatar>

                            {genderIcon}
                        </div>
                        <div className={style.message}>
                            <ul>
                                <li> {this.props.data.info.nickname}
                                </li>
                                <li>{this.props.data.info.campus} / {this.props.data.info.grade}</li>
                            </ul>
                        </div>


                    </div>

                    <ul className={style.card_content}>

                        <li className={style["list-group-item"]}>
                            <Row>
                                <Col xs={5}>
                                    <span className={style.badge}>Ta会</span>
                                </Col>
                                <Col xs={18} offset={1}>
                                    {skill.skills.map((value, index) => (
                                        <span className={style.badge_item}>{value}</span>))}
                                </Col>
                            </Row>
                        </li>

                        <li className={style["list-group-item"]}>
                            <Row>
                                <Col xs={5}>
                                    <span className={style.badge}>Ta想学</span>
                                </Col>
                                <Col xs={18} offset={1}>
                                    {skill.skills_want.map((value, index) => (
                                        <span className={style.badge_item}>{value}</span>))}
                                </Col>
                            </Row>
                        </li>

                        <li className={style["list-group-item"]}>
                            <div>
                                <div>
                                    <Icon type="clock-circle"/>
                                    <span>{time}</span>
                                </div>
                                <div>
                                    <Icon type="eye"/>
                                    <span> {views} </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </a>
        )
    }
}


class index extends Component {
    render() {
        let datas = [{
            "info": {
                "nickname": "无约",
                "campus": "西校区",
                "grade": "17级",
                "gender": "保密"
            },
            "skill": {
                "skills": ["Python", "前端", "Linux"],
                "skills_want": ["啥都想学", "想学2", '想学3']
            },
            "link": {
                "wx": "17398224910",
                "qq": "1357424862",
                "phone": "17398224910"
            },
            "time": new Date().toDateString(),
            "views": "999+"

        }];
        datas = datas.concat(datas);
        datas = datas.concat(datas);
        return (
            <div className={style.main_content}>
                <Title level={3} style={{margin: "20px 1.64%"}}>
                    最新发布
                </Title>
                <Row>
                    {datas.map((value, index) => (
                        <Col cpl sm={24} md={12} lg={8}><Card data={value} key={index} title="卡片标题"/></Col>))}
                </Row>
                <Row>
                    <Col sm={8} offset={8} ><Button shape={"round"} type={"primary"} style={{margin:"30px auto 20px"}} block={true} size={"large"}>加载更多</Button></Col>
                </Row>

            </div>

        );
    }
}

export default index;