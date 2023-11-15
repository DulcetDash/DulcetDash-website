import classes from "../styles/SafetyShowcase_mobile.module.css";
import ButtonDownload_mobile from "./ButtonDownload_mobile";

const SafetyShowcaseMobile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bigTitle}>Let's Ride and Rock!</div>

      <div className={classes.downloadParts}>
        <ButtonDownload_mobile
          link={
            "https://play.google.com/store/apps/details?id=com.users.dulcetdash"
          }
        />
        {/* <ButtonDownload
          storeIcon="appstore"
          introTitle="Or"
          storeName="AppStore"
          marginLeft={"5%"}
          link={"https://apps.apple.com/us/app/DulcetDash/id1523176507"}
        />
        <ButtonDownload
          storeIcon="appgallery"
          introTitle="Or"
          storeName="AppGallery"
          marginLeft={"5%"}
          link={"https://appgallery.huawei.com/app/C104325591"}
        /> */}
      </div>

      <div
        className={classes.signupFooter}
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.href = "/contact")}>
        Or <strong>signup</strong> to drive
      </div>
    </div>
  );
};

export default SafetyShowcaseMobile;
