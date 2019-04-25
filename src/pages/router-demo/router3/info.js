import React from 'react';

export default class Info extends React.Component {
   constructor(props) {
       super(props)
       console.log(this.props.match.params);
       
   }
    render () {
        return (
                <div>
                    Info
                <hr></hr>
                这里是测试动态路由功能：
                {this.props.match.params.mainId}
                </div>
        )
    }
}