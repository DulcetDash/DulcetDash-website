import { useMediaQuery } from "react-responsive";
import ContactDesktop from "./Screens/ContactDesktop";
import ContactMobile from "./Screens/ContactMobile";

function Contact() {
  //Responsive rules
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      {isDesktopOrLaptop ? (
        <ContactDesktop />
      ) : isBigScreen ? (
        <ContactDesktop />
      ) : isTabletOrMobile ? (
        <ContactMobile />
      ) : (
        "Other screen"
      )}
    </div>
  );
}

export default Contact;
