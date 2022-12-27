import React from 'react';
import { Snackbar } from '@mui/material/Snackbar';

class Notifier extends React.Component {
  state = {
    open: false,
    message: '',
  };

  handleSnackbarRequestClose = () => {
    this.setState({
      open: false,
      message: '',
    });
  };

  render() {
    const message = (
      <span id="snackbar-message-id" dangerouslySetInnerHTML={{ __html: this.state.message }} />
    );

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={this.state.open}
        message={message}
        autoHideDuration={5000}
        onClose={this.handleSnackbarRequestClose}
        ContentProps={{
          'aria-describedby': 'snackbar-message-id',
        }}
      />
    );
  }
}

export default Notifier;
