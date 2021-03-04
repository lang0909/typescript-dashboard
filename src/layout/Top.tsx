import * as React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { TopProps } from '../interface'

const { Header } = Layout

function Top({ collapsed, toggle }: TopProps){
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ?
            <MenuUnfoldOutlined className="trigger" onClick={toggle} /> :
            <MenuFoldOutlined className="trigger" onClick={toggle} />}
        </Header>
    )
}

export default Top