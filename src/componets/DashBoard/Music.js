import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicCard from "./MusicCard";
import {
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useSyles = makeStyles({
  card: {
    height: 400,
    width: 200,
  },
  search: {
    opacity: 0.7,
    padding: 5,
    backgroundColor: "pink",
    borderRadius: 8,
    marginLeft: 700,
    width: 300,
    marginRight: 10,
    marginTop: 1,
  },
  button: {
    marginLeft: 30,
    marginBottom: 3,
  },
});

function Music() {
  const classes = useSyles();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json"
      )
      .then((response) => {
        !search
          ? setData(response.data)
          : setData(response.data.filter((songs) => songs.singer === search));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  const handleSumbit = (e) => {
    e.preventDefault();
    setSearch(search);
    // console.log(search);
  };
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h3">Hello Music</Typography>
          <form className="d-flex" onSubmit={handleSumbit}>
            <input
              className={classes.search}
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Singer"
              aria-label="Search"
            />
            <input
              className="btn btn-outline-success"
              type="submit"
              value="Search"
            />
          </form>
        </Toolbar>
      </AppBar>
      <div>
        {data.length >= 1 ? (
          <div>
            <MusicCard songs={data} />
          </div>
        ) : (
          <Typography variant="h4">Loading......</Typography>
        )}
      </div>
    </div>
  );
}

export default Music;
