import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;

let uuid = 1;
export class SearchParameters extends React.Component {

  constructor(props){
    super(props);

    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  remove(k) {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    if (keys.length === 1) { return; }

    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }


  add() {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.submitHandler(e, values['names'])
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 16, offset: 4},
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 12, offset: 0 },
        sm: { span: 16, offset: 4},
      },
    };
    getFieldDecorator('keys', { initialValue: [0] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          required={false}
          key={k}
          style={{marginTop: 0, marginBottom: 0, width:'100%'}}
        >
          {getFieldDecorator(`names[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: false,
              message: "Please input parameter or delete this field.",
            }],
          })(
            <Input placeholder={index === 0 ? "Parameter (course name, professor name, etc...)" : 'Parameter'} style={{ width: '85%', marginRight: 10}} />
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });
    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '100%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </FormItem>
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}