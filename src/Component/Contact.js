import { useMediaQuery } from "react-responsive";
import ContactDesktop from "./Screens/ContactDesktop";
import ContactMobile from "./Screens/ContactMobile";
import ContactTablet from "./Screens/ContactTablet";

function Contact() {
  //Responsive rules
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 600px)" });

  return (
    <div>
      {isDesktopOrLaptop ? (
        <ContactDesktop />
      ) : isBigScreen ? (
        <ContactDesktop />
      ) : isTablet ? (
        <ContactTablet />
      ) : isTabletOrMobile ? (
        <ContactMobile />
      ) : (
        "Other screen"
      )}
    </div>
  );
}

export default Contact;
