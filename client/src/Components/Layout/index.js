import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Footer from '../Footer';
import Header from '../NavBar';

const { Content } = Layout;

const LayoutComponent = ({ children, notifications }) => {
  <Layout>
    <Header notifications={notifications} />
    <Content>{children}</Content>
    <Footer className="footer">© 2021 Dribbble. All rights reserved.</Footer>;
  </Layout>;
};

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      decription: PropTypes.string,
      created_at: PropTypes.string,
    })
  ),
};

export default LayoutComponent;
