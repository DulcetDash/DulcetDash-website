import classes from "../../styles/Home_tablet.module.css";
import HeaderTablet from "../HeaderTablet";
import headerPic from "../../Images/headerPic.jpg";
import Phone1 from "../../Images/phone1.png";
import DownloadButton_tablet from "../ButtonDownload_tablet";
import Grid from "@material-ui/core/Grid";
import SideSummaryTablet from "../SideSummaryTablet";
import { VerifiedUser, CheckCircle } from "@material-ui/icons";
import ExpositionOfThing from "../ExpositionOfThing";
import ConnectMeUsTablet from "../ConnectMeUsTablet";
import SafetyShowcaseTablet from "../SafetyShowcaseTablet";
import TechShowcaseTablet from "../TechShowcaseTablet";
import FooterTablet from "../FooterTablet";
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

const HomeTablet = () => {
  return (
    <div className={classes.container}>
      <HeaderTablet />
      {/* Presentation head */}
      <div className={classes.presentationContainer}>
        <Grid item>
          <div className={classes.leftpartContainer}>
            <div className={classes.prestTextEntryContainer}>
              <span className={classes.prestTextEntry}>
                Move anything,
                <br />
                Shop for anything
              </span>
            </div>
            <div className={classes.presTextSubContainer}>
              <span className={classes.presTextSub}>
                The most customer-centric app for all your everyday essentials,
                just a click away.
              </span>
            </div>
            <div className={classes.presHaaderDownloadContainer}>
              <DownloadButton_tablet
                link={
                  "https://play.google.com/store/apps/details?id=com.users.dulcetdash"
                }
              />
              {/* <DownloadButton_tablet
                  storeIcon="appstore"
                  introTitle="Or"
                  storeName="AppStore"
                  marginLeft={"5%"}
                  link={"https://apps.apple.com/us/app/DulcetDash/id1523176507"}
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
          <div className={classes.titleBusi}>Corporate Delivery</div>
          <div className={classes.subTitleBusi}>
            Streamline delivery requests for all your business needs in one
            central hub.
          </div>
        </div>
        {/* Button */}
        <div
          className={classes.btnDeliverySol}
          onClick={() =>
            (window.location.href = "https://business.dulcetdash.com")
          }>
          Get started today
        </div>
      </div>

      {/* 3 major pillar */}
      <div className={classes.bodyPartThreeContainerVar2}>
        <ConnectMeUsTablet />
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
            <SideSummaryTablet
              mainTitle={"Why DulcetDash?"}
              headTitles={[
                "Tap once, do anything",
                "Sound safety",
                "Accurate pricing",
              ]}
              subForTitles={[
                "DulcetDash allows you to make delivery or shopping requests seamlessly and consistently.",
                "We keep you safe at all times by encrypting end-to-end all your data.",
                "We provide very realistic and affordable prices anywhere in Windhoek.",
              ]}
              iconLeading={
                <CheckCircle style={{ fontSize: "5vmin", color: "#096ED4" }} />
              }
              endComponents={[
                <DownloadButton_tablet
                  link={
                    "https://play.google.com/store/apps/details?id=com.users.dulcetdash"
                  }
                />,
                // <DownloadButton_tablet
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
        <TechShowcaseTablet />
      </div>

      {/* Body part five */}
      <div className={classes.bodyPartFiveContainer}>
        <SafetyShowcaseTablet />
      </div>

      {/* Footer */}
      <FooterTablet />
    </div>
  );
};

export default HomeTablet;
