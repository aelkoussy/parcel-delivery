import { Card, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Grid container>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Link to="/managers">
              <Card>
                <h2>Managers portal</h2>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Link to="/bikers">
              <Card>
                <h2>Bikers portal</h2>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
