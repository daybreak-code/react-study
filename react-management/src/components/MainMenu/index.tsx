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
import { useLocation, useNavigate } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
//   ): MenuItem {
//     return {
//       key,
//       icon,
//       children,
//       label,
//     } as MenuItem;
//   }

// const items: MenuItem[] = [
//     getItem('Option 1', 'page1', <PieChartOutlined />),
//     getItem('Option 2', 'page2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//       getItem('Tom', '3'),
//       getItem('Bill', '4'),
//       getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
//   ];

const items: MenuItem[] = [
    {
        label: '栏目1',
        key: 'page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目2',
        key: 'page2',
        icon: <DesktopOutlined />,
    },
    {
        label: '栏目3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: 'Tom',
                key: '/page3/page301'
            },
            {
                label: 'Bill',
                key: '/page3/page302'
            },
            {
                label: 'Alex',
                key: '/page3/page303'
            }
        ]
    },
    {
        label: '栏目4',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: 'Team 1',
                key: '/sub1'
            },
            {
                label: 'Team 2',
                key: '/sub2'
            }
        ]
    },
    {
        label: '栏目5',
        key: 'page5',
        icon: <FileOutlined />
    },

]

const Comp: React.FC = () => {
    const [menuKeys, setMenuKeys] = useState([''])

  const navigateTo = useNavigate();
  const currentRoute = useLocation();

  const menuClick = (e: {key: string}) => {
    console.log('click menu', e.key);
    navigateTo(e.key);
    console.log('useLocation: ',currentRoute)
  }

  const handleOpenChange = (openkeys: string[]) => {
    setMenuKeys([openkeys[openkeys.length - 1]]);
  }
    return (
        <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items} openKeys={menuKeys} onClick={menuClick} onOpenChange={handleOpenChange} />
    )
}


export default Comp
