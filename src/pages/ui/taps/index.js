import React from 'react';
import { Card, Tabs, message, Icon} from 'antd';
const TabPane = Tabs.TabPane;
export default class Taps extends React.Component {
    newTabIndex = 0;
    componentWillMount(){
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                type:'plus',
                key: '1'
            },
            {
                title: 'Tab 2',
                type:'edit',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                type:'delete',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.setState({panes,activeKey:panes[0].key})
    }

    handleCallBack = (key) => {
        message.info('您选择了Tab' + key)        
    }
    onChange = (activeKey) => {
        this.setState({activeKey})
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
      }
    
    add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: activeKey, key: activeKey });
    this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
        lastIndex = i - 1;
        }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
        } else {
        activeKey = panes[0].key;
        }
    }
    this.setState({ panes, activeKey });
    }
    render () {
        return (
                <div>
                    <Card title='TABS页签'>
                        <Tabs defaultActiveKey='1' onChange={this.handleCallBack}>
                            <TabPane tab='tab 1' key='1'>tab1</TabPane>
                            <TabPane tab='tab 2' key='2' disabled>tab2</TabPane>
                            <TabPane tab='tab 3' key='3'>tab3</TabPane>
                        </Tabs>
                    </Card>

                    <Card title='tab带图的icon页签'>
                        <Tabs defaultActiveKey='1' onChange={this.handleCallBack}>
                            <TabPane tab={<span><Icon type='plus'/> TAB1</span>} key='1'>tab1</TabPane>
                            <TabPane tab={<span><Icon type='edit'/> TAB2</span>} key='2'>tab2</TabPane>
                            <TabPane tab={<span><Icon type='delete'/> TAB3</span>} key='3'>tab3</TabPane>
                        </Tabs>
                    </Card>
                    <Card title='tab带图的icon页签(动态生成)'>
                        <Tabs 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                        type='editable-card'
                        >
                            {
                                this.state.panes.map((item) => {
                                    return <TabPane tab={<span><Icon type={item.type}/> {item.content}</span>} key={item.key}>
                                    tab3</TabPane>
                                })
                            }
                        </Tabs>
                    </Card>
                </div>
        )
    }
}