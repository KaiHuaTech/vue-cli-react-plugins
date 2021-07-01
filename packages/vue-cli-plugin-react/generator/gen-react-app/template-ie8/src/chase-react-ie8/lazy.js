import React from 'react';

import Loadable from 'react-loadable';

// const Loading = () => <div>Loading...</div>;
function Loading(props) {
  if (props.error) {
    throw props.error;
  } else if (props.timedOut) {
    return <div>loading time out</div>;
  } else {
    return <div>Loading...</div>;
  }
}
export default function lazy(loader, opts) {
  return Loadable({
    loading: Loading,
    // delay: 200,
    timeout: 10000,
    ...opts,
    loader,
  });
}
