import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', 'page1', <PieChartOutlined />),
  getItem('Option 2', 'page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuKeys, setMenuKeys] = useState([''])
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigateTo = useNavigate();

  const menuClick = (e: {key: string}) => {
    console.log('click menu', e.key);
    navigateTo(e.key);
  }

  const handleOpenChange = (openkeys: string[]) => {
    setMenuKeys([openkeys[openkeys.length - 1]]);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['page1']} mode="inline" items={items} openKeys={menuKeys} onClick={menuClick} onOpenChange={handleOpenChange} />
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: '16px', background: colorBgContainer }} >
          <Breadcrumb style={{lineHeight: '64px' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '0 16px', backgroundColor: 'blue' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px'}}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;