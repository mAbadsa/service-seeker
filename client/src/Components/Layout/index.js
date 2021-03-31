import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Footer from '../Footer';
import Header from '../NavBar';

const { Content } = Layout;

const LayoutComponent = ({ children }) => {
  <Layout>
    <Header></Header>
    <Content>{children}</Content>
    <Footer className="footer">© 2021 Dribbble. All rights reserved.</Footer>;
  </Layout>;
};

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
