import { useMediaQuery } from "react-responsive";
import PrivacyDesktop from "./Screens/PrivacyDesktop";
import PrivacyMobile from "./Screens/PrivacyMobile";
import PrivacyTablet from "./Screens/PrivacyTablet";

function Privacy() {
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
        <PrivacyDesktop />
      ) : isBigScreen ? (
        <PrivacyDesktop />
      ) : isTablet ? (
        <PrivacyTablet />
      ) : isTabletOrMobile ? (
        <PrivacyMobile />
      ) : (
        "Other screen"
      )}
    </div>
  );
}

export default Privacy;
