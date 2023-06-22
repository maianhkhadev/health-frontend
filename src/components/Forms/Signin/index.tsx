import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Input, message } from 'antd'

const FormSignin: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const onFormSubmit = async () => {
    const values = await form.validateFields()

    if (values.email === 'admin@gmail.com' && values.password === 'admin123') {
      navigate('/dashboard')
      return
    }
    
    message.error('Your credential is not valid')
  }

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
          },
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Button block onClick={onFormSubmit}>
        Sign In
      </Button>
    </Form>
  )
}

export default FormSignin
