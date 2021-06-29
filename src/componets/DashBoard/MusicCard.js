import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    height: 6000,
    width: 1500,
    marginTop: 100,
    padding: 50,
    marginLeft: 100,
  },
  songCard: {
    height: 500,
    marginBottom: 30,
    color: "#5F939A",
  },
  audioComp: {
    left: 10,
    position: "absolute",
    bottom: 15,
  },
});

function MusicCard({ songs }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className="row">
        {songs.map((song) => {
          return (
            <div className="col-md-4" key={song.id}>
              <div className={classes.songCard} style={{ width: "17.5rem" }}>
                <img src={song.img} className="card-img-top" alt={song.title} />
                <Grid className="card-body">
                  <Typography variant="h6" align="center">
                    Song:{song.title}
                  </Typography>
                  <Typography variant="h5" align="center">
                    Movie : {song.movie}
                  </Typography>
                  <Grid className={classes.audioComp}>
                    <audio controls src={song.song} />
                  </Grid>
                </Grid>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MusicCard;
