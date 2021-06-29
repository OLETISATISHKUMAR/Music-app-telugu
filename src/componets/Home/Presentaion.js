import React from "react";
import { Typography, Button, makeStyles, Card } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useSyles = makeStyles({
  card: {
    width: 400,
    height: 300,
    textAlign: "center",
    marginTop: 200,
    marginLeft: 550,
    padding: 50,
    backgroundColor: "#E798AE",
    borderRadius: 10,
  },
  button: {
    marginTop: 50,
  },
  navlink: {
    textDecoration: "none",
  },
});

function Presentaion() {
  const classes = useSyles();
  return (
    <div>
      <Card className={classes.card}>
        <Typography variant="h4"> TELUGU MUSICAL WORLD </Typography>
        <NavLink to="/music" className={classes.navlink}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Let's Start
          </Button>
        </NavLink>
      </Card>
    </div>
  );
}

export default Presentaion;
