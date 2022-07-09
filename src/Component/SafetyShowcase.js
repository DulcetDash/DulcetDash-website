import classes from "../styles/SafetyShowcase.module.css";
import ButtonDownload from "./ButtonDownload";

const SafetyShowcase = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bigTitle}>Let's Ride and Rock!</div>

      <div className={classes.downloadParts}>
        <ButtonDownload
          link={"https://play.google.com/store/apps/details?id=com.Orniss"}
        />
        {/* <ButtonDownload
          storeIcon="appstore"
          introTitle="Or"
          storeName="AppStore"
          marginLeft={"5%"}
          link={"https://apps.apple.com/us/app/Orniss/id1523176507"}
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
        onClick={() => (window.location.href = "/contact")}
      >
        Or <strong>signup</strong> to drive
      </div>
    </div>
  );
};

export default SafetyShowcase;
