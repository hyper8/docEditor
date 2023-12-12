import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  { type: 'divider' },
  getItem('PC端DEMO列表', 'PCSet', <SettingOutlined />, [
    getItem('焦点图', '/dashboard/PCSet/focal'),
    getItem('图文展示', '/dashboard/PCSet/mediaDisplay'),
    getItem('图文切换', '/dashboard/PCSet/mediaSwitch'),
    getItem('多图展示', '/dashboard/PCSet/multiPicture'),
    getItem('多视频切换', '/dashboard/PCSet/videoSwitch'),
    getItem('高清大图', '/dashboard/PCSet/HDPictures'),
    getItem('其他', '/dashboard/PCSet/others'),
  ]),
  getItem('移动端DEMO列表', 'MobileSet', <SettingOutlined />, [
    getItem('焦点图', '/dashboard/MobileSet/focal'),
    getItem('多视频切换', '/dashboard/MobileSet/videoSwitch'),
    getItem('高清大图', '/dashboard/MobileSet/HDPictures'),
    getItem('其他', '/dashboard/MobileSet/others'),
  ]),
  getItem('操作技术知识', 'OperationSet', <SettingOutlined />, [
    getItem('常用快捷键', 'OperationItem1'),
    getItem('Windows快捷键', 'OperationItem2'),
  ]),
  getItem('代码基础知识', 'CodeSet', <SettingOutlined />, [
    getItem('初识代码', 'CodeItem1'),
    getItem('认识HTML标签', 'CodeItem2'),
    getItem('设置显示文件的后缀名', 'CodeItem3'),
    getItem('前端的编辑工具', 'CodeItem4'),
  ]),
  getItem('专题后台', 'BackendSet', <SettingOutlined />, [
    getItem('设置VPN', 'BackendItem1'),
    getItem('专题结构', 'BackendItem2'),
    getItem('上传注意事项', 'BackendItem3'),
    getItem('前端的编辑工具', 'BackendItem4'),
  ]),
  getItem('专题搭建', 'ThemeBuildSet', <SettingOutlined />, [
    getItem('海报专题制作', 'ThemeBuildItem1'),
    getItem('模板专题制作', 'ThemeBuildItem2'),
    getItem('页面分享代码调用', 'ThemeBuildItem3'),
    getItem('背景音乐库', 'ThemeBuildItem4'),
  ]),
];

const SideMenu: React.FC = () => {
  let currentPath = ''
  const getAllPath = (pathname: string) => {
    const pathSnippets = pathname.split("/").filter((i: string) => i);
    return pathSnippets.map((_: string, index: number) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return url;
    });
  };
  const router = useRouter();
  const pathname = usePathname();
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    console.log('router ', router);
    console.log('pathname ', pathname);
    router.replace(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultOpenKeys={['PCSet']}
      defaultSelectedKeys={['PCItem1']}
      selectedKeys={[currentPath]}
      mode="inline"
      items={items}
    />
  );
};

export default SideMenu;