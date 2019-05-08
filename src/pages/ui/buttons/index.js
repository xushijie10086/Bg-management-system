import React from 'react';
import { Card, Button, Radio } from 'antd';
import './../ui.less'

export default class Buttons extends React.Component {
    state = {
        loading: true
    }
    //#endregion
    handleCloseLoading = () => {
        this.setState({
            loading: !this.state.loading,
            size:'default'
        })
    }
    render () {
        const { loading } = this.state;
        return (
            <div className='buttons'>
                <Card title="基础按钮" >
                    <Button type='primary'>默认</Button>
                    <Button>纯按钮</Button>
                    <Button type='dashed'>dashed</Button>
                    <Button type='danger'>danger</Button>
                    <Button disabled>禁用</Button>
                </Card>
                
                <Card title="图形按钮">
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>

                <Card title="loading按钮">
                    <Button type='primary' loading={loading}>确定</Button>
                    <Button shape='circle' type='primary' loading={loading}></Button>
                    <Button loading={loading}>点击加载</Button>
                    <Button shape='circle' loading={loading}></Button>
                    <Button type='primary' onClick={this.handleCloseLoading}>切换</Button>
                </Card>

                <Card title="按钮组">
                   <Button.Group>
                     <Button type='primary' icon='left' style={{marginRight:0}}>前进</Button>  
                     <Button type='primary' icon='right'>返回</Button>  
                   </Button.Group>
                </Card>      

                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={(e) => {
                        this.setState({
                            size: e.target.value
                        })
                    }}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button type='primary' size={this.state.size}>奔波儿灞</Button>
                    <Button type='dashed' size={this.state.size}>奔波儿灞</Button>
                    <Button size={this.state.size}>奔波儿灞</Button>
                    <Button type='danger' size={this.state.size}>奔波儿灞</Button>
                </Card>
            </div>
        )
    }
}