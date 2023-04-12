import React from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';
import Head from 'next/head';

import { getChapterDetailApiMethod } from '../../lib/api/public';
import withAuth from '../../lib/withAuth';

class ReadChapter extends React.Component {
  constructor(props) {}

  componentDidUpdate(prevProps) {}

  static async getInitialProps(ctx) {}

  renderMainContent() {}

  render() {}
}

export default withAuth(ReadChapter, { loginRequired: false });
