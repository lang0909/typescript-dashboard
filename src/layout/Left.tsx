import * as React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { LeftProps } from '../interface'

const { Sider } = Layout

function Left({ collapsed } : LeftProps){
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/">
                        사용자
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <Link to="/video">
                        비디오
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    <Link to="/upload">
                        업로드
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Left