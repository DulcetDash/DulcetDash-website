import classes from "../styles/Footer_mobile.module.css";
import Grid from "@material-ui/core/Grid";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  LocationOn,
  Public,
} from "@material-ui/icons";
import logoWhite from "../Images/logo_white.png";

const FooterMobile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mainTitle}>
        <div className={classes.logoFooter}>
          <img
            alt="logofooter"
            src={logoWhite}
            className={classes.truLogoFooter}
          />
        </div>
      </div>
      {/* Table */}
      <div className={classes.tableElements}>
        <Grid container>
          <Grid item>
            <div className={classes.itemSpace}>
              <div className={classes.title}>Company</div>
              {/* <div
                className={classes.elementIn}
                onClick={() => (window.location.href = "/about")}
              >
                About us
              </div> */}
              <div
                className={classes.elementIn}
                onClick={() => (window.location.href = "/contact")}
              >
                Contact
              </div>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item>
            <div className={classes.itemSpace}>
              <div className={classes.title}>Products</div>
              <div
                className={classes.elementIn}
                onClick={() => (window.location.href = "/")}
              >
                Ride
              </div>
              <div
                className={classes.elementIn}
                onClick={() => (window.location.href = "/")}
              >
                Delivery
              </div>
              <div
                className={classes.elementIn}
                onClick={() => (window.location.href = "/")}
              >
                Shopping
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* Second stage */}
      <Grid container>
        <Grid item>
          <div className={classes.seconStageContainer}>
            <div className={classes.secondStageEls1}>
              <div className={classes.socialMed}>
                <Twitter
                  onClick={() =>
                    (window.location.href =
                      "https://twitter.com/Orniss_namibia")
                  }
                  style={{ fontSize: "5.5vmin" }}
                />
              </div>
              <div className={classes.socialMed}>
                <Instagram
                  onClick={() =>
                    (window.location.href =
                      "https://www.instagram.com/orniss_namibia/")
                  }
                  style={{ fontSize: "5.5vmin" }}
                />
              </div>
              <div className={classes.socialMed}>
                <Facebook
                  onClick={() =>
                    (window.location.href = "https://www.facebook.com/orniss")
                  }
                  style={{ fontSize: "5.5vmin" }}
                />
              </div>
              <div className={classes.socialMed}>
                <LinkedIn
                  onClick={() =>
                    (window.location.href =
                      "https://www.linkedin.com/company/orniss")
                  }
                  style={{ fontSize: "5.5vmin" }}
                />
              </div>
            </div>
          </div>
          <div className={classes.secondStageEls2}>
            <div className={classes.sse2Part1}>
              <Public style={{ fontSize: "4vmin" }} />
              <span style={{ width: "5px" }}></span>English
            </div>
            <div className={classes.sse2Part2}>
              <LocationOn style={{ fontSize: "4vmin" }} />
              <span style={{ width: "5px" }}></span>Windhoek, Namibia
            </div>
          </div>
        </Grid>
      </Grid>
      {/* Thrid stage */}
      <div className={classes.copyrPart2}>
        <div
          className={classes.termsEls}
          onClick={() => (window.location.href = "/privacy")}
        >
          Privacy
        </div>
        <div
          className={classes.termsEls}
          onClick={() => (window.location.href = "/privacy")}
          style={{ marginRight: 0 }}
        >
          Terms
        </div>
      </div>
      <Grid container className={classes.containerCopyrightTerms}>
        <Grid item className={classes.copyrPart1}>
          <div>© 2022 Orniss Technologies CC.</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterMobile;
