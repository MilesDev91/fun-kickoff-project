// This component uses a resize listener event to update itself and whatever component it is wrapped around.
import { Component } from 'react';

// eslint-disable-next-line
const withResizeHandler = (WrappedComponent) => {
  return class extends Component {
    // _isMounted (and handling it in the mounted methods) is to prevent setting state on an unmounted component
    _isMounted = false;

    displayName = 'withResizeHandler';
    resize() {
      this.forceUpdate();
    }

    componentDidMount() {
      window.addEventListener('resize', this.resize.bind(this));
      this._isMounted = true;
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resize.bind(this));
      this._isMounted = false;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withResizeHandler;
