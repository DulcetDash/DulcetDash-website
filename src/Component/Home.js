import { useMediaQuery } from "react-responsive";
import HomeDesktop from "./Screens/HomeDesktop";
import HomeMobile from "./Screens/HomeMobile";
import HomeTablet from "./Screens/HomeTablet";

function Home() {
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
        <HomeDesktop />
      ) : isBigScreen ? (
        <HomeDesktop />
      ) : isTablet ? (
        <HomeTablet />
      ) : isTabletOrMobile ? (
        <HomeMobile />
      ) : (
        "Other screen"
      )}
      {/* <HomeDesktop /> */}
    </div>
  );
}

export default Home;
