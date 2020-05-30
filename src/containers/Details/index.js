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
  Box,
  Card,
  CardContent,
  Grid,
  CardMedia
} from "@material-ui/core";

import { getCapitalDetails } from "./action";
import { getCountryDetails } from "../Home/action";

const styles = {
  root: {
    display: "flex",
    height: 200
  },
  rootWeather: {
    display: "flex",
    height: 120
  },
  image: {
    display: "flex",
    width: "40%"
  },
  cover: {
    width: "100%"
  },
  details: {
    display: "flex",
    width: "55%",
    flexDirection: "column"
  },
  title: {
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "2.5%"
  },
  button: {
    marginTop: "2.5%"
  }
};

class Details extends Component {
  state = {
    isSubmitted: false
  };
  componentDidMount() {
    if (Object.keys(this.props.countryDetails).length === 0) {
      this.props.getCountryDetails(this.props.match.params.country);
    }
  }

  capitalDetailsButton = () => {
    this.setState({
      isSubmitted: true
    });
    this.props.getCapitalDetails(this.props.countryDetails.capital);
  };

  render() {
    if (this.props.isFetchingCountryDetails) {
      return <Typography variant="h4">Fetching Country Details</Typography>;
    }
    const { classes } = this.props;
    return (
      <>
        <Container maxWidth="md">
          <Typography variant="h4" className={classes.title}>
            Country Details
          </Typography>
          <Card className={classes.root}>
            <Grid item container justify="space-between">
              <Box className={classes.image}>
                <CardMedia
                  className={classes.cover}
                  image={this.props.countryDetails.flag}
                />
              </Box>
              <Box className={classes.details}>
                <CardContent>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Country : {this.props.countryDetails.name}
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Capital : {this.props.countryDetails.capital}
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Population : {this.props.countryDetails.population}
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Latitude-Longitude :{" "}
                    {this.props.countryDetails.latlng
                      ? this.props.countryDetails.latlng[0]
                      : 0}{" "}
                    ,{" "}
                    {this.props.countryDetails.latlng
                      ? this.props.countryDetails.latlng[1]
                      : 0}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          </Card>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.capitalDetailsButton}
            className={classes.button}
          >
            Capital Weather
          </Button>
        </Container>

        <Box>
          <Container maxWidth="xs">
            {this.props.isFetchingCapitalDetails ? (
              <Typography variant="body1" color="textPrimary" gutterBottom>
                Fetching Capital Weather...
              </Typography>
            ) : null}
          </Container>
          {Object.keys(this.props.capitalDetails).length !== 0 &&
          this.state.isSubmitted ? (
            <Container maxWidth="sm">
              <Typography variant="h4" className={classes.title}>
                Weather Details
              </Typography>
              <Card className={classes.root}>
                <Grid item container justify="space-between">
                  <Box className={classes.image}>
                    <CardMedia
                      className={classes.cover}
                      image={this.props.capitalDetails.current.weather_icons[0]}
                    />
                  </Box>
                  <Box className={classes.details}>
                    <CardContent>
                      <Typography variant="h5" color="primary" gutterBottom>
                        Temperature :{" "}
                        {this.props.capitalDetails.current.temperature}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        gutterBottom
                      >
                        Wind Speed :{" "}
                        {this.props.capitalDetails.current.wind_speed}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        gutterBottom
                      >
                        Precipitation :{" "}
                        {this.props.capitalDetails.current.precip}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
              </Card>
            </Container>
          ) : null}
        </Box>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.home,
    ...state.details
  };
};

const mapDispatchToProps = {
  getCapitalDetails,
  getCountryDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Details)));
