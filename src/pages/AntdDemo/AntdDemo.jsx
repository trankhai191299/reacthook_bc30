import React from 'react'
import {DatePicker,Button} from 'antd'
export default function AntdDemo(props) {
  return (
    <div className='container'>
        Demo antd
        <div>
            <DatePicker/>
            <Button size='large'>Button click</Button>
        </div>
    </div>
  )
}
