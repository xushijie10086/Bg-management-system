import React from 'react'
import { Card, Button, notification } from 'antd';
export default class Notifications extends React.Component {
   
    openNotification = (type, description) => {
        if (description) {
            notification.config({
                placement:description
            })
        }
        notification[type]({
            message:type,
            description:'哒哒哒哒哒哒多多多多多多多多多'
        })
    }
    render () {
        return (
            <div>
                <Card title='通知提醒框'>
                    <Button type='primary' onClick={() => this.openNotification('success')}> Success</Button>
                    <Button type='primary' onClick={() => this.openNotification('info')}> Info</Button>
                    <Button type='primary' onClick={() => this.openNotification('warning')}> Warning</Button>
                    <Button type='primary' onClick={() => this.openNotification('error')}> Error</Button>
                </Card>
                <Card title='通知提醒框方向控制'>
                    <Button type='primary' onClick={() => this.openNotification('success', 'topLeft')}> Success</Button>
                    <Button type='primary' onClick={() => this.openNotification('info', 'topRight')}> Info</Button>
                    <Button type='primary' onClick={() => this.openNotification('warning', 'bottomLeft')}> Warning</Button>
                    <Button type='primary' onClick={() => this.openNotification('error', 'bottomRight')}> Error</Button>
                </Card>
            </div>
        )
    }
}