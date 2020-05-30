import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  Container,
  FormControl,
  TextField,
  Button,
  Typography,
  Box
} from "@material-ui/core";

import { getCountryDetails } from "./action";

const styles = {
  input: {
    marginTop: "5%",
    marginBottom: "2.5%"
  },
  infoBox: {
    marginTop: "5%"
  }
};

class Home extends Component {
  state = {
    country: "",
    isubmitted: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.countryDetails !== this.props.countryDetails) {
      this.props.history.push(`/country-details/${this.state.country}`);
      return true;
    } else {
      return false;
    }
  }

  submitHandler = () => {
    this.setState({
      isubmitted: true
    });
    this.props.getCountryDetails(this.state.country);
  };

  inputChnageHandler = event => {
    this.setState({
      country: event.target.value,
      isubmitted: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container>
        <FormControl fullWidth>
          <TextField
            value={this.state.country}
            onChange={this.inputChnageHandler}
            variant="outlined"
            label={"Enter Country"}
            className={classes.input}
            helperText="Please enter 3 character to search"
          />
          <Button
            disabled={this.state.country.length < 3}
            onClick={this.submitHandler}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </FormControl>
        <Box className={classes.infoBox}>
          {this.props.isFetchingCountryDetails ? (
            <Typography variant="h4">Fetching Country Details...</Typography>
          ) : null}
          {this.props.countryFetchFailed && this.state.isubmitted ? (
            <Typography variant="h4" color="error">
              {this.props.countryFailMessage}
            </Typography>
          ) : null}
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.home };
};

const mapDispatchToProps = { getCountryDetails };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Home)));
