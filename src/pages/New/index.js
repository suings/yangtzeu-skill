import React, {Component} from "react";
import {Typography, Form, Input, Button, Radio, Row, Col, Select} from 'antd';
import style from './index.scss'


const {Title} = Typography;
const {TextArea} = Input;
const {Option} = Select;
export default class New extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 12},
        };
        const buttonItemLayout =
            {
                wrapperCol: {span: 14, offset: 4},
            };
        return (
            <div style={{margin: "20px 1.64%"}}>
                <div>
                    <Title level={3}>
                        发布信息
                    </Title>
                </div>
                <Form className={style.container}>
                    <Row>
                        <Col sm={24} md={12}>
                            <div className="card">
                                <Title level={4}> 你的信息</Title>
                                <Form.Item label="昵称" {...formItemLayout} required={true}>
                                    <Input placeholder="请输入你的昵称"/>
                                </Form.Item>
                                <Form.Item label="所在校区" {...formItemLayout} required={true}>
                                    <Radio.Group defaultValue="东校区" buttonStyle="solid">
                                        <Radio.Button value="东校区">东校区</Radio.Button>
                                        <Radio.Button value="西校区">西校区</Radio.Button>
                                        <Radio.Button value="武汉校区">武汉校区</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label={"年级"} {...formItemLayout} required={true}>
                                    {/*<Select defaultValue="普本" style={{ width: 120 }}>*/}
                                    {/*    <Option value="本科">普本</Option>*/}
                                    {/*    <Option value="研">研</Option>*/}
                                    {/*</Select>*/}
                                    <Select defaultValue="18级" style={{width: 120}}>
                                        <Option value="18级">18级</Option>
                                        <Option value="17级">17级</Option>
                                        <Option value="16级">16级</Option>
                                        <Option value="15级">15级</Option>
                                        <Option value="14级">14级</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label={"性别"} {...formItemLayout} required={true}>
                                    <Radio.Group defaultValue="保密" buttonStyle="solid">
                                        <Radio.Button value="男">男</Radio.Button>
                                        <Radio.Button value="女">女</Radio.Button>
                                        <Radio.Button value="保密">保密</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>

                            </div>
                            <div className="card">
                                <Title level={4}>技能</Title>
                                <Form.Item label="你的技能" {...formItemLayout} required={true}>
                                    <Select mode="tags" style={{width: '100%'}} placeholder="输入你的技能"
                                            notFoundContent={"输入一个技能吧"}>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="想学的技能" {...formItemLayout} required={true}>
                                    <Select mode="tags" style={{width: '100%'}} placeholder="输入你的技能"
                                            notFoundContent={"输入一个技能吧"}>
                                    </Select>

                                </Form.Item>

                            </div>
                            <div className="card">
                                <Title level={4}> 联系方式
                                    <Typography.Text style={{fontSize:"12px"}} type={"secondary"}> 最少选择一个输入</Typography.Text>

                                </Title>

                                <Form.Item label="微信" {...formItemLayout}>
                                    <Input placeholder="请输入微信号"/>
                                </Form.Item>
                                <Form.Item label={"QQ"} {...formItemLayout}>
                                    <Input placeholder="请输入QQ号"/>
                                </Form.Item>
                                <Form.Item label={"手机号"} {...formItemLayout}>
                                    <Input placeholder="请输入手机号"/>
                                </Form.Item>
                            </div>
                        </Col>
                        <Col sm={24} md={12}>
                            <Form.Item>
                                <Title level={4}>说点什么吧!</Title>

                                <TextArea autosize={{minRows:6,maxRows:12}}>

                                </TextArea>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
                <Row>
                    <Col sm={{span:16,offset: 4}} md={{span:8,offset:8}} ><Button shape={"round"} type={"primary"} style={{margin:"30px auto 20px"}} block={true}>提交我的技能!</Button></Col>
                </Row>
            </div>
        );
    }
}

