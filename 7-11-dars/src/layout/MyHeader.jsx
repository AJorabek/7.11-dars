import { InfoCircleOutlined, LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

const MyHeader = () => {
  
  return (
    <Header
    style={{
      theme: "dark",
      padding: 0,
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Button
      style={{
        fontSize: "16px",
        width: 64,
        height: 64,
        backgroundColor:"transparent",
        border:"none"
      }}
    />
    <div
      className="rightbar"
      style={{
        marginRight: 10,
      }}
    >
      <Button style={{ marginRight: 15, paddingRight: 20 }}>
      <InfoCircleOutlined />  Synchronization
      </Button>
      <Button
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
      >
      Exit <LogoutOutlined />
      </Button>
    </div>
  </Header>
  )
}

export default MyHeader