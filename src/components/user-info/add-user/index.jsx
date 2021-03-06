import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Input, message } from 'antd'
import loginServices from '../../../services/loginServices'

class AddUserComponent extends Component {
  static propTypes = {
    dialogStauts: PropTypes.bool.isRequired,
    sendEmit: PropTypes.func.isRequired,
    refreshEmit: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleOk = e => {
    this.props.form.validateFields(async (err, values) => {
      console.log(values)
      if (!err) {
        let data = await loginServices.registorUser(values);
        if(data) {
          message.success('添加成功');
          // 通知父组件刷新
          this.props.refreshEmit();
        }// 清空form对象
        this.props.form.resetFields();
      }
    });
  }
  handleCancel = e => {
    // 向父组件传值
    this.props.sendEmit(true);
    this.props.form.resetFields();
  };
  render() {
    // 校验函数对象 ---- 组件是一个函数类型
    const { getFieldDecorator } = this.props.form;
    // 接收父组件的值
    const { dialogStauts } = this.props;
    return (
      <div>
        <Modal
          title="添加用户信息"
          cancelText={'取消'}
          okText={'确认'}
          visible={dialogStauts}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form  onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="用户名">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字，下划线组成' }],
              })(
                <Input
                  placeholder="username"
                />
              )}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' },
                ],
              })(
                <Input
                  placeholder="password"
                />
              )}
            </Form.Item>
            <Form.Item label="手机号码">
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入手机号码' },
                { pattern: /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/, message: '请输入正确手机号码' }
               ],
              })(
                <Input
                  placeholder="phone"
                />
              )}
            </Form.Item>
            <Form.Item label="角色">
              {getFieldDecorator('roleId', {
                rules: [{ required: true, message: '请输入角色' },],
              })(
                <Input
                  placeholder="roleId"
                />
              )}
            </Form.Item>
            <Form.Item label="邮箱">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: '请输入邮箱' },],
              })(
                <Input
                  placeholder="email"
                />
              )}
            </Form.Item>
            <Form.Item label="手机类型">
              {getFieldDecorator('phoneModel', {
                rules: [{ required: true, message: '请输入手机类型' },],
              })(
                <Input
                  placeholder="phoneModel"
                />
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
// 高阶组件
export default Form.create()(AddUserComponent)

