import React from 'react'
import { FilterStep } from 'ccms'
import { IFilter, IFilterItem, FilterConfig } from 'ccms/dist/src/steps/filter'
import { Button, Form, Space } from 'antd'
import getALLComponents from '../../components/formFields'

export default class FilterStepComponent extends FilterStep {
  getALLComponents = (type: any) => getALLComponents[type]

  renderComponent = (props: IFilter) => {
    const {
      onSubmit,
      onReset,
      children
    } = props

    return (
      <Form
        layout={'inline'}
        style={{ marginBottom: 16 }}
      >
          {children}
          <Form.Item>
            <Space>
              <Button type="primary" onClick={() => onSubmit()}>确定</Button>
              <Button onClick={() => onReset()}>重置</Button>
            </Space>
          </Form.Item>
      </Form>
    )
  }

  renderItemComponent = (props: IFilterItem) => {
    const {
      label,
      status,
      message,
      children
    } = props

    return (
      <Form.Item
        label={label}
        validateStatus={ status === 'normal' ? undefined : status === 'error' ? 'error' : 'validating' }
        help={message}
      >
        {children}
      </Form.Item>
    )
  }
}
export const PropsType = (props: FilterConfig ) => { };
