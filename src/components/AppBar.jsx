import React from "react";
import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbarStyles: {
    margin: "0px",
    display: "flex",
    padding: "0.5vw",
  },
  flexBox:{
    display:'flex',
    justifyContent:'end',
    alignContent:'end'
  },
  iconStyles: {
    color: "#fff",
  },
});

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar position="sticky" className={styles.navbarStyles}>
      <Toolbar>
        <Grid container>
          <Grid item xs={6} lg={10}>
            <Typography variant="h4" component="h1">
              Contrasena
            </Typography>
          </Grid>

          <Grid item xs={6} lg={2} className={styles.flexBox}>
            <IconButton>
              <FavoriteIcon className={styles.iconStyles} />
            </IconButton>
            <IconButton>
              <GitHubIcon className={styles.iconStyles} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
