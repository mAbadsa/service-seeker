import { useState } from 'react';
import { Layout, Menu } from 'antd';

const { Header, Footer, Content } = Layout;

const LayoutComponent = (props, isLogged, style) => {
    const {children} = props;
    const [current, setCurrent] = useState('home');

    const handleMenu = (e)=>{
        setCurrent(e.key);
    }
    // expecting isLogged a boolean to specify if this person is logged or not

    return <Layout>
        <Header>
            <Menu onClick={handleMenu} selectedKeys={[current]} mode='horizontal'>
            <Menu.Item key='home'>Home</Menu.Item>
            {isLogged? <Menu.Item key='orders'>Orders</Menu.Item>: null}
            <Menu.Item key='aboutUs'>About Us</Menu.Item>
            </Menu>
            </Header>
        <Content style={style}>
            {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>© 2021 Hound. All rights reserved.</Footer>
    </Layout>
}

export default LayoutComponent;