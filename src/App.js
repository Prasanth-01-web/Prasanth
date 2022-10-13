/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { UploadOutlined, DownOutlined } from '@ant-design/icons';   
import { Button, Upload, Dropdown, Menu, Space } from 'antd';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a target="_blank" rel="noopener noreferrer" href="">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            2nd menu item
          </a>
        ),

      },
    ]}
  />
);

function Msg(){
  return(
    // eslint-disable-next-line no-global-assign
    alert = 'Save Successfully'
  )
}


function App() {
  return (
    <div className="App">
      <div className='App1'>
        <Card title="Upload Document">

          <div className='App2'>
            <Row>
              <Col className='doc' span={10}>Document Type</Col>
              <Col className='doc2'>Upload Document</Col>
            </Row>
          </div> 

          <div className='App3'>
            <Row>
              <Col className='doc3' span={10}><p>Aadhar Card Photo - All Partner/<br />Directors / Authorised Person</p></Col>
              <Col className='doc4' > <UserOutlined /></Col>
              <Col className='doc5' span={3}>Mr. Aryan<br /><h6>Director</h6></Col>
              <Col className='neo'>  <Upload>
                <Button icon={<UploadOutlined />}>Upload Document File </Button>
              </Upload>    </Col>
            </Row>

            <div className='App4'>
              <Row>
                <Col className='doc6' > <UserOutlined /></Col>
                <Col className='doc7' span={3}>Mr. Sagar<br /><h6>Director</h6></Col>
                <Col className='neo'>  <Upload>
                  <Button icon={<UploadOutlined />}>Upload Document</Button>
                </Upload>    </Col>
              </Row>
            </div>
          </div>

          <div className='App5'>
            <Row>
              <Col span={14}>List of Directors/Partners/Coparcencers</Col>
              <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>

          <div className='App6'>
            <Row>
              <Col span={10}>Address Proof</Col>
              <Col span={4}>
                <Dropdown overlay={menu}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Select Document
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown> </Col>
                <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>

          <div className='App6'>
            <Row>
              <Col span={14}>Latest IT Return / Form 16</Col>
              <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>

          <div className='App6'>
            <Row>
              <Col span={14}>Bank Statement for last 6 months</Col>
              <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>

          <div className='App6'>
            <Row>
              <Col span={14}>Enrolled Letter, if enrolled with other ban / FI<br/>for similar service</Col>
              <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>

          <div className='App6'>
            <Row>
              <Col span={14}>MOA and AOA</Col>
              <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>  

          <div className='App6'>
            <Row>
              <Col span={14}>Partnership Deed</Col> 
              <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>

          <div className='App6'>
            <Row>
              <Col span={14}>HUF Deed</Col>
              <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>

           <div className='App6'>
            <Row>
              <Col span={14}>Board Resolution</Col>
              <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>

          <div className='App6'>
            <Row>
              <Col span={14}>Partner Authority Letter</Col>
              <Col> <Upload>
                <Button icon={<UploadOutlined />}>Upload Document</Button>
              </Upload> </Col>
            </Row>
          </div>

        </Card>
      </div>
      <Button className='btn' onClick={Msg}> Save </Button>

      

      
       




</div>
  );
}

export default App;
