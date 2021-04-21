import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Table } from 'antd';

import columnsData from './Columns';

import './style.css';

const TableComponent = ({
  ColumnsType,
  dataSource,
  onRowDoubleClick,
  onActions,
  scrollX,
  defaultPageSize,
  ...rest
}) => (
  <Row className="table-contener" justify="center">
    <Col sm={24} md={22} lg={19}>
      <Table
        columns={columnsData(onActions)[ColumnsType]}
        dataSource={dataSource}
        scroll={{
          x: scrollX,
        }}
        pagination={{
          position: ['bottomCenter'],
          defaultPageSize,
        }}
        onRow={(record, rowIndex) => ({
          onDoubleClick: (event) => onRowDoubleClick(event, rowIndex, record),
        })}
        sticky
        {...rest}
      />
    </Col>
  </Row>
);

TableComponent.propTypes = {
  ColumnsType: PropTypes.string.isRequired,
  onActions: PropTypes.arrayOf(PropTypes.func),
  dataSource: PropTypes.array,
  onRowDoubleClick: PropTypes.func,
  scrollX: PropTypes.string,
  defaultPageSize: PropTypes.number,
};

TableComponent.defaultProps = {
  dataSource: [],
  onRowDoubleClick: () => {},
  onActions: [],
  scrollX: '800px',
  defaultPageSize: 5,
};

export default TableComponent;
