import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";

import withAuth from "../../lib/withAuth";
import EditBookPage from "../../components/admin/EditBook";
import { getBookDetailApiMethod } from "../../lib/api/admin";
import notify from "../../lib/notify";

const propTypes = {
  slug: PropTypes.string.isRequired,
};

class EditBookPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: null,
    };
  }

  static getInitialProps({ query }) {
    return { slug: query.slug };
  }

  async componentDidMount() {
    NProgress.start();

    try {
      const { slug } = this.props;

      const book = await getBookDetailApiMethod({ slug });
      this.setState(book);

      NProgress.done();
    } catch (err) {
      notify(err.message | err.toString());

      NProgress.done();
    }
  }

  editBookOnSave = async (data) => {
    const book = this.state;
    NProgress.start();

    try {
      const book = await addBookApiMethod(data);

      notify("Saved");

      try {
        const bookId = book._id;

        await syncBookContentApiMethod({ bookId });

        notify("Synced");

        NProgress.done();

        Router.push(
          `admin/book-detail?slug=${book.slug}`,
          `/admin/book-detail/${book.slug}`
        );
      } catch (err) {
        notify(err.message || err.toString());

        NProgress.done();
      }
    } catch (err) {
      notify(err.message || err.toString());

      NProgress.done();
    }
  };

  render() {
    return (
      <div style={{ padding: "10px 45px" }}>
        <EditBookPage onSave={this.addBookOnSave} />
      </div>
    );
  }
}

EditBookPage.propTypes = propTypes;

export default withAuth(EditBookPage);
