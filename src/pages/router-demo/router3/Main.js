import React from 'react';
import { Link } from 'react-router-dom'
export default class Main extends React.Component {
   
    state ={
        mainId1:'0',
        mainId2:'234'
    }

    render () {
        return (
                <div>
                    Main
                    <Link to={`/main/${this.state.mainId1}`}>嵌套路由（二级路由）1</Link>
                    <br/>
                    <Link to={`/main/${this.state.mainId2}`}>嵌套路由（二级路由）2</Link>
                    <br/>
                    {this.props.children}
                </div>
        )
    }
}