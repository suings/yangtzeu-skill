import React, {Component} from "react";
import {Typography, Form, Input, Button, Radio, Row, Col, Select} from 'antd';
import style from './index.scss'


const {Title} = Typography;
const {TextArea} = Input;
const {Option} = Select;

class New extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handleSubmit = () => {
        console.log(this.props.form);
        this.props.form.validateFieldsAndScroll((err, value) => {
            if (err) {
                return;
            }
            console.log(value);
        })
    };


    render() {
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 12},
        };
        const {getFieldDecorator} = this.props.form;
        return (
            <div style={{margin: "20px 1.64%"}}>
                <Title level={3}>
                    发布信息
                </Title>
                <Form>
                    <Row className={style.container_card}>
                        <Col sm={24} md={12}>
                            <div className="card">
                                <Title level={4}> 你的信息</Title>
                                <Form.Item label="昵称" {...formItemLayout}>
                                    {getFieldDecorator('nickname', {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入昵称"
                                            }
                                        ]
                                    })(<Input placeholder="请输入你的昵称"/>
                                    )}
                                </Form.Item>
                                <Form.Item label="所在校区" {...formItemLayout}>
                                    {getFieldDecorator("campus", {
                                        initialValue: "东校区"
                                    })(
                                        <Radio.Group buttonStyle="solid">
                                            <Radio.Button value="东校区">东校区</Radio.Button>
                                            <Radio.Button value="西校区">西校区</Radio.Button>
                                            <Radio.Button value="武汉校区">武汉校区</Radio.Button>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item label={"年级"} {...formItemLayout}>
                                    {getFieldDecorator("grade", {
                                        initialValue: "18级"
                                    })(
                                        <Select style={{width: 120}}>
                                            <Option value="18级">18级</Option>
                                            <Option value="17级">17级</Option>
                                            <Option value="16级">16级</Option>
                                            <Option value="15级">15级</Option>
                                            <Option value="14级">14级</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item label={"性别"} {...formItemLayout}>
                                    {getFieldDecorator("gender", {
                                        initialValue: "保密"
                                    })(
                                        <Radio.Group buttonStyle="solid">
                                            <Radio.Button value="男">男</Radio.Button>
                                            <Radio.Button value="女">女</Radio.Button>
                                            <Radio.Button value="保密">保密</Radio.Button>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                            </div>
                            <div className="card">
                                <Title level={4}>技能</Title>
                                <Form.Item label="你的技能" {...formItemLayout}>
                                    {getFieldDecorator("skills", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请填入最少一个技能"
                                            }
                                        ]

                                    })(
                                        <Select mode="tags" style={{width: '100%'}} placeholder="输入你的技能"
                                                notFoundContent={"输入一个技能吧"}>
                                        </Select>
                                    )}


                                </Form.Item>
                                <Form.Item label="想学的技能" {...formItemLayout}>
                                    {getFieldDecorator("skills_want", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请填入最少一个技能"
                                            }
                                        ],
                                    })(
                                        <Select mode="tags" style={{width: '100%'}} placeholder="输入你的技能"
                                                notFoundContent={"输入一个技能吧"}>
                                        </Select>
                                    )}


                                </Form.Item>

                            </div>
                            <div className="card">
                                <Title level={4}> 联系方式
                                </Title>

                                <Form.Item label={"QQ"} {...formItemLayout}>
                                    {getFieldDecorator("qq", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入QQ号码!"
                                            },
                                            {
                                                pattern: /^\d{5,10}$/,
                                                message: "请输入正确的QQ号码"
                                            }
                                        ]
                                    })(
                                        <Input placeholder="请输入QQ号" maxLength={10}/>
                                    )}
                                </Form.Item>

                                <Form.Item label="微信" {...formItemLayout}>
                                    {getFieldDecorator("wechat", {
                                        rules: [{
                                            maxlength: 20,
                                            pattern: /^[0-9A-Za-z_-]{6,20}$/,
                                            message: "请输入正确的微信号码"
                                        }]
                                    })(
                                        <Input placeholder="请输入微信号" maxLength={20}/>
                                    )}
                                </Form.Item>

                                <Form.Item label={"手机号"} {...formItemLayout}>
                                    {getFieldDecorator("phone", {
                                        rules: [
                                            {
                                                pattern: /^\d{11}$/,
                                                message: "请输入正确的手机号码"
                                            }
                                        ]
                                    })(
                                        <Input placeholder="请输入手机号" maxLength={11}/>
                                    )}
                                </Form.Item>
                            </div>
                        </Col>
                        <Col sm={24} md={12}>
                            <Form.Item>
                                <Title level={4}>说点什么吧!</Title>
                                {getFieldDecorator("say", {})(<TextArea autosize={{minRows: 6, maxRows: 12}}/>)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{span: 16, offset: 4}} md={{span: 8, offset: 8}}>
                            <Form.Item>
                                <Button shape={"round"} type={"primary"}
                                        style={{margin: "30px auto 20px"}}
                                        block={true}
                                        htmlType="submit"
                                        onClick={this.handleSubmit}
                                >提交我的技能!</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </div>
        );
    }
}

export default Form.create()(New);