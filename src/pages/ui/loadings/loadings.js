import React from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import './../ui.less'

export default class Loadings extends React.Component {
    state = {

    }

    render () {
        // const 声明的常量 不能修改它的内存地址
        // 这样会报错 因为const定义的是一个常量， 直接存在内存里了
        // const a = 1;
        // a = 2; 

        // 这样不会报错，因为在内存地址中，但是这是改变了值而已
        // const a = {a:1};
        // a.a = 2
        const icon = <Icon type='loading' style={{fontSize:24}}/>
        const plus = <Icon type='plus' style={{fontSize:24}}/>
        return (
            <div>
                <Card title='Spin用法'>
                    <Spin size='small'/>
                    <Spin style={{margin:'0 10px'}}/>
                    <Spin size='large'/>
                    
                    {/* 自定义指示符 */}
                    <Spin indicator={plus} style={{marginLeft:10}} />
                </Card>

                <Card title='内容遮罩'>
                    <Alert 
                        message='message'
                        description='我是奔波儿灞，你是灞波儿奔'
                        type='info'
                    />
                    
                    <Spin spinning={true}>
                        <Alert 
                            message='message'
                            description='我是奔波儿灞，你是灞波儿奔'
                            type='warning'
                        />
                    </Spin>

                    <Spin tip='加载中...' spinning={true}>
                        <Alert 
                            message='message'
                            description='我是奔波儿灞，你是灞波儿奔'
                            type='warning'
                        />
                    </Spin>

                    <Spin tip='加载中...' indicator={icon} spinning={true}>
                        <Alert 
                            message='message'
                            description='我是奔波儿灞，你是灞波儿奔'
                            type='warning'
                        />
                    </Spin>
                </Card>

               
            </div>
        )
    }
}