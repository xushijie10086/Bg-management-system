import React, { Component } from "react";
import {
  Form,
  Card,
  Input,
  Icon,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  message,
  Checkbox,
  Button
} from "antd";
import moment from "moment";
const { Option } = Select;
const { TextArea } = Input;
// 定义表单布局
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};
const offsetLayout = {
    wrapperCol:{
        xs:24,
        sm:{
            span:12,
            offset:4
        }
    }
}
class FormRegister extends Component {
  state = {};

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo));
    message.success(
      `${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${
        userInfo.userPwd
      }`
    );
  };

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          userImg: imageUrl,
          loading: false
        })
      );
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <Form.Item label="用户名" {...formItemLayout}>
              {getFieldDecorator("username", {
                initialValue: "",
                rules: [
                  { required: true, message: "用户名不能为空!" },
                  { min: 5, message: "最小5个字" },
                  { max: 10, message: "最大10个字" },
                  {
                    //   pattern: /^\\w+$/g,
                    pattern: new RegExp("^\\w+$", "g"),
                    message: "用户名必须为字母或者数字"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>

            <Form.Item label="密码" {...formItemLayout}>
              {getFieldDecorator("password", {
                initialValue: "",
                rules: [
                  { required: true, message: "密码不能为空!" },
                  { min: 5, message: "最小5个字" },
                  { max: 10, message: "最大10个字" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item label="性别" {...formItemLayout}>
              {getFieldDecorator("sex", {
                initialValue: "1",
                rules: []
              })(
                <Radio.Group>
                  <Radio value="1">man</Radio>
                  <Radio value="2">women</Radio>
                </Radio.Group>
              )}
            </Form.Item>

            <Form.Item label="年龄" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: 18,
                rules: []
              })(<InputNumber />)}
            </Form.Item>

            <Form.Item label="当前状态" {...formItemLayout}>
              {getFieldDecorator("state", {
                initialValue: "1",
                rules: []
              })(
                <Select>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item label="爱好" {...formItemLayout}>
              {getFieldDecorator("interest", {
                initialValue: ["1", "2"],
                rules: []
              })(
                <Select mode="multiple">
                  <Option value="1">游泳</Option>
                  <Option value="2">篮球</Option>
                  <Option value="3">乒乓球</Option>
                  <Option value="4">足球</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item label="是否已婚" {...formItemLayout}>
              {getFieldDecorator("isMarried", {
                valuePropName: "checked",
                initialValue: false
              })(<Switch />)}
            </Form.Item>

            <Form.Item label="生日" {...formItemLayout}>
              {getFieldDecorator("birthday", {
                initialValue: moment("2018-01-01")
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </Form.Item>

            <Form.Item label="联系地址" {...formItemLayout}>
              {getFieldDecorator("adress", {
                initialValue: "长航蓝晶国际"
              })(<TextArea autosize={{ minRows: 5, maxRows: 6 }} />)}
            </Form.Item>

            <Form.Item label="早起时间" {...formItemLayout}>
              {getFieldDecorator("time", {
                initialValue: ""
              })(<TimePicker showTime />)}
            </Form.Item>

            <Form.Item label="头像" {...formItemLayout}>
              {getFieldDecorator("userImg", {
                initialValue: ""
              })(
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  onChange={this.handleChange}
                  action="//jsonplaceholder.typicode.com/posts/"
                >
                  {this.state.userImg ? (
                    <img src={this.state.userImg} alt="" />
                  ) : (
                    <Icon type="plus" />
                  )}
                </Upload>
              )}
            </Form.Item>
            <Form.Item {...offsetLayout}>
              {getFieldDecorator("userImg")(
                <Checkbox>
                  我已阅读过<a >慕课协议</a>
                </Checkbox>
              )}
            </Form.Item>
            <Form.Item {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                注册
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
const WrapFormReg = Form.create()(FormRegister);
export default WrapFormReg;
