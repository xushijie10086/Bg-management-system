
import React from 'react';
import { Menu, Icon } from 'antd';
import MenuConfig from "../../config/menuConfig";
import './index.less';

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({menuTreeNode})
    }

    /**
     * 菜单渲染
     */
    renderMenu = (data)=> {
        return data.map( (item) => {
            if (item.children) {
               return (
                   <SubMenu title={item.title} key={item.key}>
                       {this.renderMenu(item.children)}
                   </SubMenu>
                ) 
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }

    render(){
       
        return (
            <div >
                <div className='logo'>
                    <img src='/assets/logo-ant.svg' alt=''/>
                    <h1>奔波儿灞 MS</h1>
                </div>
                <Menu theme='dark'>
                    {/* <SubMenu title="SubMenu">
                        
                    </SubMenu> */}
                    {this.state.menuTreeNode}
                </Menu>
                
            </div>
        )
    }
}