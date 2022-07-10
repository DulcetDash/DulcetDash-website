import classes from "../../styles/Contact_mobile.module.css";
import HeaderTablet from "../HeaderTablet";
import { useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Grid from "@material-ui/core/Grid";
import SideSummaryTablet from "../SideSummaryTablet";
import {
  FiberManualRecord,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  VerifiedUser,
} from "@material-ui/icons";
import ReactMapGL from "react-map-gl";
import React from "react";
import hands2 from "../../Images/hands2.png";
import FooterTablet from "../FooterTablet";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactTablet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lat: -22.575694,
      lng: 17.083251,
      zoom: 14,

      viewport: {
        longitude: -22.575694,
        latitude: 17.083251,
        zoom: 14,
        bearing: 0,
        pitch: 0,
      },
    };
    this.mapContainer = React.createRef();
  }

  static defaultProps = {
    center: {
      lat: -22.575694,
      lng: 17.083251,
    },
    zoom: 11,
  };

  componentDidMount() {
    // const { lng, lat, zoom } = this.state;
    // const map = new mapboxgl.Map({
    //   container: this.mapContainer.current,
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [lng, lat],
    //   zoom: zoom,
    // });
  }

  render() {
    // const [viewport, setViewport] = useState({
    //   width: "100%",
    //   height: "100%",
    //   latitude: -22.575694,
    //   longitude: 17.083251,
    //   zoom: 13,
    // });

    return (
      <div className={classes.container}>
        <HeaderTablet />
        <div className={classes.mapContainer}>
          <ReactMapGL
            width={"100%"}
            height={"100%"}
            latitude={-22.575942561535346}
            longitude={17.08319797425795}
            zoom={11}
            mapStyle={"mapbox://styles/mapbox/streets-v11"}
            mapboxApiAccessToken={
              "pk.eyJ1IjoiZG9taW5pcXVla3R0IiwiYSI6ImNrYXg0M3gyNDAybDgyem81cjZuMXp4dzcifQ.PpW6VnORUHYSYqNCD9n6Yg"
            }
            // asyncRender={true}
            dragPan={true}
            scrollZoom={true}
          ></ReactMapGL>
        </div>

        {/* Before last form */}
        <div className={classes.bodyPartFourContainer}>
          <Grid item>
            <div className={classes.leftPartBPOContainerBeforeFooter}>
              <img alt="hands2" src={hands2} className={classes.phone1} />
            </div>
          </Grid>
          <Grid item>
            <div
              // className={classes.rightPartBPOContainer}
              style={{ marginTop: "7%" }}
            >
              <SideSummaryTablet
                mainTitle={
                  <div style={{ position: "relative", left: 46 }}>
                    Contact us 24/7h
                  </div>
                }
                headTitles={["", "Our address", "Our phone number", ""]}
                subForTitles={[
                  "We'll be more than happy to assist you with any query, you can get in touch with us any time.",
                  "Windhoek, Namibia",
                  "+264856997167",
                  "support@ornisstechnologies.com",
                ]}
                iconLeading={<></>}
                endComponents={null}
              />
            </div>
          </Grid>
        </div>

        {/* Footer */}
        <FooterTablet />
      </div>
    );
  }
}

export default ContactTablet;
