import React, { Component } from 'react';
import propTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withRouter = (WrappedComponent, opts) => {
  const withRef = opts && opts.withRef;

  class Hoc extends Component {
    static displayName = `withRouter(${getDisplayName(WrappedComponent)})`;

    static contextTypes = {
      router: propTypes.object.isRequired,
    };

    getWrappedInstance = () => {
      if (!withRef) {
        // eslint-disable-next-line no-throw-literal
        throw 'To access the wrapped instance, you need to specify `{ withRef: true }` as the second argument of the withRouter() call.';
      }

      return this.wrappedInstance;
    };

    saveInstance = (r) => {
      this.wrappedInstance = r;
    };

    render() {
      const originProps = this.props;

      const { params, location, routes } = this.context.router;

      const props = {
        ...originProps,
        params,
        location,
        routes,
        router: this.context.router,
      };

      if (withRef) {
        props.ref = this.saveInstance;
      }

      return <WrappedComponent {...props} />;
    }
  }

  return Hoc;
};

export default withRouter;
