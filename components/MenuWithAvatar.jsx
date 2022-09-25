import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import Link from 'next/link';

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(Object).isRequired,
};

class MenuWithAvatar extends React.Component {
  constructor() {
    super();

    this.state = {
      anchorEl: undefined,
    };
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { options, src, alt } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <Avatar />
      </div>
    );
  }
}

MenuWithAvatar.propTypes = propTypes;

export default MenuWithAvatar;
