import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";

export default class FormDialog extends React.Component {
  state = { open: false };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submitClicked = () => {
    this.handleClose();
    this.props.dialogSubmitClicked();
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} color="primary">
          {this.props.buttonName}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            {this.props.description && (
              <DialogContentText style={{ marginBottom: 10 }}>
                {this.props.description}
              </DialogContentText>
            )}
            {/* we added here a prop to pass a form component that dispatches some action with callback function  */}
            {this.props.inputComponent}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.submitClicked} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
