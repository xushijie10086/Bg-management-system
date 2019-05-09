import React from 'react';
import { Card, Button, Modal } from 'antd';
import './../ui.less'

export default class Modals extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
 
    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }
    handleClose = (type) => {
        this.setState({
            [type]: false
        })
    }
    handleConfirm = (type) => {
        Modal[type]({
            title:'确认？',
            content:'你确认你学会了React吗？',
            onOk() {
                console.log('ok');
                
            },
            onCancel() {
                console.log('cancel');
                
            }
        })
    }
    render () {
        return (
            <div className='modals'>
                <Card title='基础模态框'>
                    <Button type='primary' onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type='primary' onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type='primary' onClick={() => this.handleOpen('showModal3')}>顶部20px位置弹框</Button>
                    <Button type='primary' onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>

                <Card title='信息确认框'>
                    <Button type='primary' onClick={() => this.handleConfirm('confirm')}>alert-confirm</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('info')}>alert-info</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('success')}>alert-success</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('warning')}>alert-warning</Button>
                </Card>

                <Modal
                    title='React'
                    visible={this.state.showModal1}
                    onCancel={() => this.handleClose('showModal1')} 
                    onOk={() => this.handleClose('showModal1')}
                >
                    <p>基础弹框</p>
                </Modal>
                
                <Modal
                    title='React'
                    visible={this.state.showModal2}
                    okText='这里是自定义页脚'
                    cancelText='这里是自定义页脚取消按钮文字'
                    onCancel={() => this.handleClose('showModal2')} 
                    onOk={() => this.handleClose('showModal2')}
                >
                    <p>自定义页脚</p>
                </Modal>

                <Modal
                    title='React'
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={() => this.handleClose('showModal3')} 
                    onOk={() => this.handleClose('showModal3')}
                >
                    <p>点击顶部20px效果!</p>
                </Modal>

                <Modal
                    title='React'
                    wrapClassName='vertical-center-modal'
                    visible={this.state.showModal4}
                    onCancel={() => this.handleClose('showModal4')} 
                    onOk={() => this.handleClose('showModal4')}
                >
                    <p>水平垂直居中</p>
                </Modal>
            </div>
        )
    }
}