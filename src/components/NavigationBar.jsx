import {
    HomeOutlined,
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    SettingOutlined,LaptopOutlined, NotificationOutlined, UserOutlined
  } from '@ant-design/icons';
  import '../App.css';
  import { Button, Menu,Breadcrumb, Layout } from 'antd';
  
  import 'antd/dist/antd.min.css';
  import React, { useState } from 'react';
  import { Badge, Calendar } from 'antd';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import Dashboard from '../client/Dashboard';
  import LeaveApplication from '../client/LeaveApplication';
  const { Header, Content, Sider } = Layout;
  
  
  
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  
  
  // const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  //   const key = String(index + 1);
  //   return {
  //     key: `sub${key}`,
  //     icon: React.createElement(icon),
  //     label: `subnav ${key}`,
  //     children: new Array(4).fill(null).map((_, j) => {
  //       const subKey = index * 4 + j + 1;
  //       return {
  //         key: subKey,
  //         label: `option${subKey}`,
  //       };
  //     }),
  //   };
  // });
  
  const NavigationBar = () => {
    const [current, setCurrent] = useState('mail');
    const [collapsed, setCollapsed] = useState(false);
  
  
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return (
      <>
    <Layout>
      <Header className="header" height={'100%'}>
        <div className="logo" style={{color:'white'}}>IESYNC E-LEAVE SYSTEM</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200} height={'100%'} className="site-layout-background">
          <Menu
           mode="inline"
            defaultSelectedKeys={['/Dashboard']}
            // defaultOpenKeys={['sub1']}
            // style={{
            //   height: '100%',
            //   borderRight: 0,
            // }}
            // items={items2}
            >
            
            <Menu.Item key={'/Dashboard'}>
              <HomeOutlined/>
              <span>Dashboard</span>
  
  
              <Link to="/Dashboard"/>
            </Menu.Item>
            <Menu.Item key={'/LeaveApplication'}>
              <HomeOutlined/>
              <span>Leave Application</span>
  
  
              <Link to="/LeaveApplication"/>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
            
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 980,
              
            }}
          >

              <Routes>
                <Route exact path='/' element={<Dashboard/>}/>
                <Route exact path='/Dashboard' element={<Dashboard/>}/>
                <Route exact path='/LeaveApplication' element={<LeaveApplication/>}/>
              </Routes>

            
          </Content>
        </Layout>
      </Layout>
    </Layout>
        
  
      </>
    );
  };
  
  export default NavigationBar;