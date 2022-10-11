import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

const globalUser = null;

export default function withAuth(
  BaseComponent,
  { loginRequired = true, logoutRequired = false } = {},
) {
  const propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      isAdmin: PropTypes.bool,
    }),
    isFromServer: PropTypes.bool.isRequired,
  };

  const defaultProps = {
    user: null,
  };

  class App extends React.Component {
    static async getInitialProps(ctx) {
      // get props
    }

    componentDidMount() {
      // component did mounts
    }

    render() {
      return (
        <>
          <BaseComponent {...this.props} />
        </>
      );
    }
  }

  App.propTypes = propTypes;
  App.defaultProps = defaultProps;

  return App;
}
