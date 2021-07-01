import React from 'react';
import { Breadcrumb } from 'antd';

const DefaultLayout = (props) => {
  const { routes, params } = props;
  return (
    <div className="layout">
      <Breadcrumb routes={routes} params={params} />
      <div className="layout-content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
