import React, { Component } from "react";
import { Card, Table, Modal } from "antd";
import axios from "./../../axios/index";

export default class BasicTable extends Component {
  state = {
    dataSource: null,
    dataSource2: []
  };
  componentDidMount() {
    const dataSource = [
      {
        id: "0",
        key: "0",
        name: "Jack",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2018-10-23",
        age: "23",
        address: "长航蓝晶国际",
        time: "09:00"
      },
      {
        id: "1",
        key: "1",
        name: "tom",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2018-10-23",
        age: "23",
        address: "长航蓝晶国际",
        time: "09:00"
      },
      {
        id: "2",
        key: "2",
        name: "lili",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2018-10-23",
        age: "23",
        address: "长航蓝晶国际",
        time: "09:00"
      }
    ];
    dataSource.map((item, index) => {
      item.key = index;
    });
    this.setState({ dataSource });
    this.request();
  }
  // 动态获取Mock数据
  request = () => {
    // let baseUrl = 'https://www.easy-mock.com/mock/5cdd6c2dde6549706f7ef693/qiyuMock';
    // axios.get(baseUrl + '/table/list').then(res => {
    //   if(res.status === 200 && res.data.code === 0){
    //     this.setState({dataSource2:res.data.result})
    //   }
    // })
    axios
      .ajax({
        url: "/table/list",
        method: "get",
        data: {
          params: {
            page: 1
          }
          // ,isShowLoading: false
        }
      })
      .then(res => {
        if (res.code === 0) {
          res.result.map((item, index) => {
            item.key = index;
          });
          this.setState({ dataSource2: res.result });
        }
      });
  };
  handleRowClick = (record, index) => {
    // console.log(record, index);
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
    Modal.info({
      title: `${record.name}`,
      content: `用户年龄${record.age},住在${record.address}`
    });
  };
  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "性别",
        dataIndex: "sex",
        key: "sex",
        render(sex) {
          return sex === 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        dataIndex: "state",
        key: "state",
        render(state) {
          let config = {
            "1": "a",
            "2": "b",
            "3": "c",
            "4": "d",
            "5": "e"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        key: "intersect",
        render(state) {
          const config = {
            "1": "篮球",
            "2": "足球",
            "3": "橄榄球",
            "4": "乒乓球",
            "5": "网球"
          };
          return config[state];
        }
      },
      {
        title: "生日",
        dataIndex: "birthday",
        key: "birthday"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "早起时间",
        dataIndex: "time",
        key: "time"
      }
    ];
    const rowSelection = {
      type: "radio",
      selectedRowKeys: this.state.selectedRowKeys
    };
    const { dataSource, dataSource2 } = this.state;
    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />
        </Card>

        <Card title="动态数据展示-Mock">
          <Table
            bordered
            columns={columns}
            dataSource={dataSource2}
            pagination={false}
          />
        </Card>

        <Card title="Mock-单选">
          <Table
            bordered
            rowSelection={rowSelection}
            selectedRowKeys={this.state.selectedRowKeys}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.handleRowClick(record, index);
                } // 点击行
                // onDoubleClick: event => {},
                // onContextMenu: event => {},
                // onMouseEnter: event => {}, // 鼠标移入行
                // onMouseLeave: event => {},
              };
            }}
            columns={columns}
            dataSource={dataSource2}
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}
