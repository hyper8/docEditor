import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MobileOutlined, DesktopOutlined, SettingOutlined, DatabaseOutlined, BulbOutlined, CloudUploadOutlined } from '@ant-design/icons';
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
  getItem('PC端DEMO列表', 'PCSet', <DesktopOutlined />, [
    getItem('焦点图', '/dashboard/PCSet/focal'),
    getItem('图文展示', '/dashboard/PCSet/mediaDisplay'),
    getItem('图文切换', '/dashboard/PCSet/mediaSwitch'),
    getItem('多图展示', '/dashboard/PCSet/multiPicture'),
    getItem('多视频切换', '/dashboard/PCSet/videoSwitch'),
    getItem('高清大图', '/dashboard/PCSet/HDPictures'),
    getItem('其他', '/dashboard/PCSet/others'),
  ]),
  getItem('移动端DEMO列表', 'mobileSet', <MobileOutlined />, [
    getItem('焦点图', '/dashboard/mobileSet/focal'),
    getItem('多视频切换', '/dashboard/mobileSet/videoSwitch'),
    getItem('高清大图', '/dashboard/mobileSet/HDPictures'),
    getItem('其他', '/dashboard/mobileSet/others'),
  ]),
  getItem('操作技术知识', 'operationSet', <SettingOutlined />, [
    getItem('常用快捷键', '/dashboard/operationSet/shortcut'),
    getItem('Windows快捷键', '/dashboard/operationSet/winShortcut'),
  ]),
  getItem('代码基础知识', 'codeSet', <BulbOutlined />, [
    getItem('初识代码', '/dashboard/codeSet/code'),
    getItem('认识HTML标签', '/dashboard/codeSet/tags'),
    getItem('设置显示文件的后缀名', '/dashboard/codeSet/suffix'),
    getItem('前端的编辑工具', '/dashboard/codeSet/tools'),
  ]),
  getItem('专题后台', 'backendSet', <DatabaseOutlined />, [
    getItem('设置VPN', '/dashboard/backendSet/setup'),
    getItem('专题结构', '/dashboard/backendSet/structrue'),
    getItem('上传注意事项', '/dashboard/backendSet/tips'),
    getItem('前端的编辑工具', '/dashboard/backendSet/tools'),
  ]),
  getItem('专题搭建', 'themeBuildSet', <CloudUploadOutlined />, [
    getItem('海报专题制作', '/dashboard/themeBuildSet/poster'),
    getItem('模板专题制作', '/dashboard/themeBuildSet/template'),
    getItem('页面分享代码调用', '/dashboard/themeBuildSet/share'),
    getItem('背景音乐库', '/dashboard/themeBuildSet/bgm'),
  ]),
];

const SideMenu: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    console.log('router ', router);
    console.log('pathname ', pathname);
    router.push(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultOpenKeys={['PCSet']}
      defaultSelectedKeys={['/dashboard/PCSet/focal']}
      mode="inline"
      items={items}
    />
  );
};

export default SideMenu;