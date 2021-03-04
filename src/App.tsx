import * as React from 'react'
import { useState } from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { Left, Top, Main } from './layout'
import './css/App.css'

const { Content } = Layout

function App(){
    const [collapsed, setCollapsed] = useState(true)

    const toggle = () => setCollapsed(!collapsed)

    return(
        <BrowserRouter>
            <Layout>
                <Left collapsed={collapsed} />
                <Layout className="site-layout">
                    <Top collapsed={collapsed} toggle={toggle} />
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 856,
                        }}
                    >
                        <Main/>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    )
}

export default App