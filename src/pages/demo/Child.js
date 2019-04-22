import React from 'react';

export default class Child extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    /**
     *  跟上面的 constructor 实例是等价的。
     */
    // state = {
    //     count:0
    // }
    
    componentWillMount(){
        console.log('WillMount')
    }

    componentDidMount(){
        console.log('didMount')
    }
    
    componentWillReceiveProps(newProps){
        // 将要接收到一个属性  拦截父组件传进来的属性值
        console.log('will props' + newProps.name)
    }

    shouldComponentUpdate() {
        /**
         * setState 后悔调用 以下三个生命周期
         * 1. 'should update' 需要更新
         * 2. 'will update'   即将更新
         * 3. 'did update'    已更新
         */
        console.log('should update');
        return true;
    }
    componentWillUpdate(){
        console.log('will update');
    }
    
    componentDidUpdate(){
        console.log('did update');

    }
    render() {
        const style= {
            background:'yellow',
            padding:20
        }
        return (
            <div style = {style}>
                <p>Child组件，测试子组件的生命周期</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}