import classes from "../../styles/Home_mobile.module.css";
import HeaderMobile from "../HeaderMobile";
import headerPic from "../../Images/headerPic.jpg";
import Phone1 from "../../Images/phone1.png";
import ButtonDownload_mobile from "../ButtonDownload_mobile";
import Grid from "@material-ui/core/Grid";
import SideSummaryMobile from "../SideSummaryMobile";
import { VerifiedUser, CheckCircle } from "@material-ui/icons";
import ExpositionOfThing from "../ExpositionOfThing";
import ConnectMeUsMobile from "../ConnectMeUsMobile";
import SafetyShowcaseMobile from "../SafetyShowcaseMobile";
import TechShowcaseMobile from "../TechShowcaseMobile";
import FooterMobile from "../FooterMobile";
// Images vehicles
import comfortrideElectric_d from "../../Images/Vehicles/comfortrideElectric_d.jpg";
import comfortrideNormal_e from "../../Images/Vehicles/comfortrideNormal_e.jpg";
import electricEconomy from "../../Images/Vehicles/electricEconomy.jpg";
import luxuryRideElectric from "../../Images/Vehicles/luxuryRideElectric.jpg";
import luxuryRideNormal_d from "../../Images/Vehicles/luxuryRideNormal_d.jpg";
import normaltaxieconomy from "../../Images/Vehicles/normaltaxieconomy.jpg";
import vandeliveryNormal_c from "../../Images/Vehicles/vandeliveryNormal_c.jpg";
import bikesdeliveryElectric from "../../Images/Vehicles/bikesdeliveryElectric.jpg";
import bikesdeliveryNormal_d from "../../Images/Vehicles/bikesdeliveryNormal_d.jpg";
import phoneHands from "../../Images/phone.png";
import windhoek from "../../Images/windhoek.jpg";

const HomeMobile = () => {
  return (
    <div className={classes.container}>
      <HeaderMobile />
      {/* Presentation head */}
      <div className={classes.presentationContainer}>
        <Grid item>
          <div className={classes.leftpartContainer}>
            <div className={classes.prestTextEntryContainer}>
              <span className={classes.prestTextEntry}>
                Go anywhere,
                <br />
                Move anything,
                <br />
                Shop for anything
              </span>
            </div>
            <div className={classes.presTextSubContainer}>
              <span className={classes.presTextSub}>
                The most customer-centric app for your everyday logisitics
                needs, just a click away.
              </span>
            </div>
            <div className={classes.presHaaderDownloadContainer}>
              <ButtonDownload_mobile
                link={
                  "https://play.google.com/store/apps/details?id=com.Orniss"
                }
              />
              {/* <ButtonDownload_mobile
                  storeIcon="appstore"
                  introTitle="Or"
                  storeName="AppStore"
                  marginLeft={"5%"}
                  link={"https://apps.apple.com/us/app/Orniss/id1523176507"}
                /> */}
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.rightpartContainer}>
            <img alt="prest" src={headerPic} className={classes.headerPic} />
          </div>
        </Grid>
      </div>

      <div className={classes.businessContainer}>
        <div className={classes.insideBusinessC}>
          <div className={classes.titleBusi}>Earn extra money</div>
          <div className={classes.subTitleBusi}>
            Drive on your free time for Orniss to make money
          </div>
        </div>
        {/* Button */}
        <div
          className={classes.btnDeliverySol}
          onClick={() => (window.location.href = "/contact")}
        >
          Sign up to drive
        </div>
      </div>

      {/* 3 major pillar */}
      <div className={classes.bodyPartThreeContainerVar2}>
        <ConnectMeUsMobile />
      </div>

      {/* Body part one */}
      <div className={classes.bodyPartOneContainer}>
        <Grid item>
          <div className={classes.leftPartBPOContainer}>
            <img alt="phon1" src={Phone1} className={classes.phone1} />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.rightPartBPOContainer}>
            <SideSummaryMobile
              mainTitle={"Why Orniss?"}
              headTitles={[
                "Tap once, do anything",
                "Sound safety",
                "Accurate pricing",
              ]}
              subForTitles={[
                "Orniss allows you make ride, delivery or shopping requests seemlessly and consistently.",
                "We keep you safe at all times by encrypting end-to-end all your data.",
                "We provide very realistic and affordable prices anywhere in Windhoek.",
              ]}
              iconLeading={
                <CheckCircle style={{ fontSize: "7vmin", color: "#096ED4" }} />
              }
              endComponents={[
                <ButtonDownload_mobile
                  link={
                    "https://play.google.com/store/apps/details?id=com.Orniss"
                  }
                />,
                // <ButtonDownload_mobile
                //   storeIcon="appgallery"
                //   introTitle="Or"
                //   storeName="AppGallery"
                //   marginLeft={"7%"}
                //   link={"https://appgallery.huawei.com/app/C104325591"}
                // />,
              ]}
            />
          </div>
        </Grid>
        {/* </Grid> */}
      </div>

      {/* Body part two */}
      {/* <div className={classes.bodyPartTwoContainer}>
        <ExpositionOfThing
          mainTitle={"Rides and deliveries seemlessly"}
          subtitle={
            "Welcome to a world where drivers come to you from the comfort of your home, office, friends place or even date night, wherever you are we can get you there. A world where we try to make life a little easier with our new on-demand package delivery. All from the palm of your hands without any hassle."
          }
          picturesToExpose={[
            vandeliveryNormal_c,
            bikesdeliveryNormal_d,
            bikesdeliveryElectric,
            normaltaxieconomy,
            electricEconomy,
            comfortrideNormal_e,
            luxuryRideNormal_d,
          ]}
        />
      </div> */}

      {/* Body part four */}
      <div className={classes.bodyPartThreeContainer}>
        <TechShowcaseMobile />
      </div>

      {/* Body part five */}
      <div className={classes.bodyPartFiveContainer}>
        <SafetyShowcaseMobile />
      </div>

      {/* Footer */}
      <FooterMobile />
    </div>
  );
};

export default HomeMobile;
