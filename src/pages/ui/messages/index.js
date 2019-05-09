import React from 'react';
import { Card, Button, message } from 'antd';
 
export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        message.config({
            top: 100,
            duration: 2,
            maxCount: 3,
        })
    }
    showMessage = (type) => {
        message[type]('恭喜你恭喜你恭喜你，AntD基础的东西掌握了')
    }
    componentWillMount() {
        message.destroy();
    }
    render () {
        return (
                <div>
                    <Card title="全局提示框">
                        <Button type='primary' onClick={() => this.showMessage('success')}>Success</Button>
                        <Button type='primary' onClick={() => this.showMessage('info')}>Info</Button>
                        <Button type='primary' onClick={() => this.showMessage('warning')}>Warning</Button>
                        <Button type='primary' onClick={() => this.showMessage('error')}>Error</Button>
                        <Button type='primary' onClick={() => this.showMessage('loading')}>Loading</Button>
                    </Card>
                </div>
        )
    }
}