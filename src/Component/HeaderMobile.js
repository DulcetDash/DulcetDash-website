import classes from "../styles/Header_mobile.module.css";
import logo from "../Images/logo_2.png";
import Grid from "@material-ui/core/Grid";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  return (
    <div className={classes.headerBar}>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <div
            className={classes.logo}
            onClick={() => (window.location.href = "/")}>
            <img
              alt="logo"
              src={logo}
              className={classes.logoImg}
              onClick={() => (window.location.href = "/")}
            />
          </div>
        </Grid>
        <Grid item>
          <div>
            {/* <span
              className={classes.headerMenuName}
              onClick={() => (window.location.href = "/about")}
            >
              About
            </span> */}
            {/* <Link className={classes.headerMenuName}>
              <span onClick={() => (window.location.href = "/privacy")}>
                Privacy
              </span>
            </Link>
            <Link className={classes.headerMenuName}>
              <span onClick={() => (window.location.href = "/contact")}>
                Contact
              </span>
            </Link> */}
          </div>
        </Grid>
        <div className={classes.loginSignupContainer}>
          <LoginButton />
        </div>
      </Grid>
    </div>
  );
};

export default HeaderMobile;
