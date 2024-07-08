import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';


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

const Comp: React.FC = () => {
    const [menuKeys, setMenuKeys] = useState([''])

  const navigateTo = useNavigate();

  const menuClick = (e: {key: string}) => {
    console.log('click menu', e.key);
    navigateTo(e.key);
  }

  const handleOpenChange = (openkeys: string[]) => {
    setMenuKeys([openkeys[openkeys.length - 1]]);
  }
    return (
        <Menu theme="dark" defaultSelectedKeys={['page1']} mode="inline" items={items} openKeys={menuKeys} onClick={menuClick} onOpenChange={handleOpenChange} />
    )
}


export default Comp
