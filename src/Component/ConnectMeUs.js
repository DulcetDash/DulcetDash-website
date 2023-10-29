import classes from "../styles/ConnectMeUs.module.css";
import Grid from "@material-ui/core/Grid";
import { Person, CreditCard } from "@material-ui/icons";
//Imaages
import carImage from "../Images/normalTaxiEconomy.jpeg";
import deliveryImage from "../Images/box_delivery.png";
import shoppingImage from "../Images/cart.jpg";
import goldMedal from "../Images/gold_medal.png";

const ConnectMeUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.introConnectsContainer}>
        <div className={classes.introConnectsImgContainer}>
          <img
            alt="superiortheme"
            src={goldMedal}
            className={classes.linkImg}
          />
        </div>
        <div className={classes.subTextIntroConnects}>
          Enjoy flexibility by default
        </div>
      </div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center">
        <Grid item>
          <div className={classes.containerCard}>
            <div className={classes.imageCardContainer}>
              <img
                alt="delivery"
                src={deliveryImage}
                className={classes.imageCardTrue}
              />
            </div>
            <div className={classes.mainTitleCard}>Delivery</div>
            <div className={classes.subTextCard}>
              Move anything either personal or for your business safely
              anywhere.
            </div>
            {/* <div className={classes.specCardText}>
              <div className={classes.passengerLine}>
                <Person style={{ fontSize: 21 }} />3 passengers
              </div>
            </div> */}
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.linearSeparatorConnects}></div>
        </Grid>
        <Grid item>
          <div className={classes.containerCard}>
            <div className={classes.imageCardContainer}>
              <img
                alt="shopping"
                src={shoppingImage}
                className={classes.imageCardTrue}
              />
            </div>
            <div className={classes.mainTitleCard}>Groceries</div>
            <div className={classes.subTextCard}>
              Do your groceries from the comfort of your home and have it
              delivered quickly.
            </div>
            {/* <div className={classes.specCardText}>
              <div className={classes.passengerLine}>
                <Person style={{ fontSize: 21 }} />3 passengers
              </div>
            </div> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ConnectMeUs;
