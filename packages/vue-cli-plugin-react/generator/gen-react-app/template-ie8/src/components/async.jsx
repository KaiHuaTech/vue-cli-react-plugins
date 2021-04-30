import React from 'react';

import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;
export default function AsyncLoad(opts) {
  return Loadable(
    Object.assign(
      {
        loading: Loading,
        // delay: 200,
        timeout: 10000,
      },
      opts,
    ),
  );
}
