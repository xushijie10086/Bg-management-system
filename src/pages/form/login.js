import React, { Component } from "react";
import { Card, Form, Input, Button, Icon, message, Checkbox } from "antd";
const FormItem = Form.Item;
class FormLogin extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e, `e`);
    let userInfo = this.props.form.getFieldsValue();
    console.log(userInfo);

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        message.success(`${userInfo.username}登陆成功`);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.props.form);

    return (
      <div>
        <Card title="登陆行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary"> 提交 </Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="登陆水平表单">
          <Form
            layout="horizontal"
            style={{ width: 300 }}
            onSubmit={this.handleSubmit}
            // className="login-form"
          >
            <FormItem>
              {getFieldDecorator("username", {
                initialValue: "",
                rules: [
                  { required: true, message: "用户名不能为空!" },
                  { min: 5, message: "最小5个字" },
                  { max: 10, message: "最大10个字" },
                  { 
                    //   pattern: /^\\w+$/g, 
                      pattern: new RegExp('^\\w+$', 'g'), 
                      message: "用户名必须为字母或者数字" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator("password", {
                initialValue: "",
                rules: [{ required: true, message: "密码不能为空!" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator("remember", {
                  valuePropName:'checked', // 记住这个属性
                  initialValue: true
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a  style={{float:'right'}}>忘记密码</a>
            </FormItem>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
const WrapFromLogin = Form.create()(FormLogin);
export default WrapFromLogin;
