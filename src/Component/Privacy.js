import { useMediaQuery } from "react-responsive";
import PrivacyDesktop from "./Screens/PrivacyDesktop";
import PrivacyMobile from "./Screens/PrivacyMobile";

function Privacy() {
  //Responsive rules
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      {isDesktopOrLaptop ? (
        <PrivacyDesktop />
      ) : isBigScreen ? (
        <PrivacyDesktop />
      ) : isTabletOrMobile ? (
        <PrivacyMobile />
      ) : (
        "Other screen"
      )}
    </div>
  );
}

export default Privacy;
