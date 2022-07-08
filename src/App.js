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
import './App.css';
import { Button, Menu,Breadcrumb, Layout } from 'antd';

import 'antd/dist/antd.min.css';
import React, { useState } from 'react';
import { Badge, Calendar } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

const App = () => {


  return (
    <div className="wrapper">
      {/* <h1>Login</h1> */}     
      <Router>
        {/* Find the pages routes in the MiniDrawer component */}
        <NavigationBar/>
        {/* <Navbar/> */}
        
      </Router>

    </div> 
  );
};

export default App;