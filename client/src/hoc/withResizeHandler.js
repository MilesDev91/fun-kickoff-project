// This component uses a resize listener event to update itself and whatever component it is wrapped around.
import { Component } from 'react';

// eslint-disable-next-line
const withResizeHandler = (WrappedComponent) => {
  return class extends Component {
    displayName = 'withResizeHandler';
    resize() {
      this.forceUpdate();
    }

    componentDidMount() {
      window.addEventListener('resize', this.resize.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resize.bind(this));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withResizeHandler;
