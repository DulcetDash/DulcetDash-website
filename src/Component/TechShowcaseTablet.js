import classes from "../styles/TechShowcase_tablet.module.css";
import Grid from "@material-ui/core/Grid";
import { Person, CreditCard, People } from "@material-ui/icons";
//Imaages
import carImage from "../Images/normalTaxiEconomy.jpeg";
import deliveryImage from "../Images/box_delivery.png";
import shoppingImage from "../Images/cart.jpg";
import {
  Map,
  Explore,
  EmojiPeople,
  Fingerprint,
  EmojiTransportation,
} from "@material-ui/icons";

const TechShowcaseTablet = () => {
  return (
    <div className={classes.container}>
      <div className={classes.introConnectsContainer}>
        {/* <div className={classes.introConnectsImgContainer}>
          <img
            alt="connectstheme"
            src={linkConnect}
            className={classes.linkImg}
          />
        </div> */}
        {/* <div className={classes.subTextIntroConnects}>
          Enjoy flexibility by default
        </div> */}
      </div>
      <div>
        <Grid item>
          <div className={classes.containerCard}>
            <div className={classes.imageCardContainer}>
              <Fingerprint style={{ fontSize: "8vmin" }} />
            </div>
            <div className={classes.mainTitleCard}>Security</div>
            <div className={classes.subTextCard}>
              Your data is forever yours with our 2-way end-to-end encryptions.
            </div>
            {/* <div className={classes.specCardText}>
              <div className={classes.passengerLine}>
                <Person style={{ fontSize: 21 }} />4 passengers
              </div>
            </div> */}
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className={classes.linearSeparatorConnects}></div>
        </Grid>
        <Grid item>
          <div className={classes.containerCard}>
            <div className={classes.imageCardContainer}>
              <Map style={{ fontSize: "8vmin" }} />
            </div>
            <div className={classes.mainTitleCard}>Sustainability</div>
            <div className={classes.subTextCard}>
              Our efficient routing allows our drivers to save on fuel, reducing
              greenhouse gases.
            </div>
            {/* <div className={classes.specCardText}>
              <div className={classes.passengerLine}>
                <Person style={{ fontSize: 21 }} />3 passengers
              </div>
            </div> */}
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className={classes.linearSeparatorConnects}></div>
        </Grid>
        <Grid item>
          <div className={classes.containerCard}>
            <div className={classes.imageCardContainer}>
              <EmojiPeople style={{ fontSize: "8vmin" }} />
            </div>
            <div className={classes.mainTitleCard}>User friendly</div>
            <div className={classes.subTextCard}>
              We believe in the ease of use and accessibility to all in all our
              products.
            </div>
            {/* <div className={classes.specCardText}>
              <div className={classes.passengerLine}>
                <Person style={{ fontSize: 21 }} />3 passengers
              </div>
            </div> */}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default TechShowcaseTablet;
