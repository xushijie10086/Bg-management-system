import React, { Component } from 'react'
import { Card, Table } from 'antd'


export default class BasicTable extends Component {
  state = {
    dataSource: null
  }
  componentDidMount(){
    const dataSource = [
      {
        id:'0',
        name:'Jack',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'2018-10-23',
        age:'23',
        address:'长航蓝晶国际',
        time:'09:00'
      },
      {
        id:'1',
        name:'tom',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'2018-10-23',
        age:'23',
        address:'长航蓝晶国际',
        time:'09:00'
      },
      {
        id:'2',
        name:'lili',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'2018-10-23',
        age:'23',
        address:'长航蓝晶国际',
        time:'09:00'
      }
    ]
    this.setState({dataSource})
  }
  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        key: 'intersect',
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        key: 'time',
      },

    ];
    const {dataSource} = this.state;
    return (
      <div>
          <Card title='基础表格'>
              <Table
                bordered
                columns={columns} 
                dataSource={dataSource} 
                pagination={false}
              ></Table>
          </Card>
      </div>
    )
  }
}
