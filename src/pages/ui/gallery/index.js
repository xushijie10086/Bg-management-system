import React from 'react';
import { Card, Row, Col, Modal } from 'antd';

export default class Gallery extends React.Component {
    state = {
        visible:false
    }
   componentWillMount() {
    // const imgs = this.getImgs();
    // console.log(imgs);
    
   }

   getImgs = () => {
    //    let imgsLen = 5, imgLen = 5;
    //    let imgs = [],img = [];
    //    for (let i = 1; i <= imgsLen; i++) {
    //        img.push(`${i}.png`);
    //        for(let j = 1; j <= imgLen; j++) {
    //         img.push(`${i*j + 1}.png`);
    //        }
    //        imgs.push(img)
    //    }
    //    return imgs;
   }
   openGallery = (item) => {
    console.log(item);
    this.setState({
        visible:true,
            currentImg: '/gallery/'+item
    })
   }
    render () {
        const imgs = [
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','20.png'],
            ['21.png','22.png','23.png','24.png','25.png'],
        ]
        const imgList = imgs.map((list) => list.map((item) => 
            <Card
                key={item}
                style={{marginBottom:10}}
                cover={<img src={'/gallery/' + item} alt='' onClick={() => this.openGallery(item)}/>}
                
           >
                <Card.Meta title='React Admin' description='奔波儿灞'  />
            </Card> 
        ))
        console.log(imgList);
        return (
                <div>
                    <Row gutter={10}>
                     <Col md={5}>
                        {imgList[0]}
                     </Col>  
                     <Col md={5}>
                        {imgList[1]}
                     </Col>
                     <Col md={5}>
                        {imgList[2]}
                     </Col>
                     <Col md={5}>
                        {imgList[3]}
                     </Col> 
                     <Col md={4}>
                        {imgList[4]}
                     </Col> 
                    </Row>

                    <Modal
                        title='图片画廊'
                        visible={this.state.visible}
                        onCancel={() => 
                            this.setState({visible: false})
                        }

                        footer={null}
                    >
                        <img src={this.state.currentImg} alt='' style={{width:'100%'}}/>
                    </Modal>
                </div>
        )
    }
}