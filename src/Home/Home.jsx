import Grid from "@mui/material/Grid";
import MenuButton from "../MenuButton/MenuButton";
import Box from "@mui/material/Box";
import SearchInput from "./SearchInput";
import Logo from "../Logo/bike.png";
import AutoPlay from "../AutoPlay/AutoPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <Box
        style={{ backgroundColor: "#3D3D3B" }}
        sx={{ width: "100%", height: 150 }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} columns={9}>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <img
                style={{ width: "15vw", marginTop: "3vw" }}
                src={Logo}
                alt=""
              />
            </Grid>
            <Grid item xs={1}>
              <SearchInput />
            </Grid>
            <Grid item xs={1} sx={{ mt: 9.5 }}>
              <MenuButton
                backgroundColor={"#66CCFF"}
                width={"10vw"}
                height={"2.3vw"}
                color={"#000000"}
                path={"/"}
                buttonName={"Koszyk"}
              />
            </Grid>
            <Grid item xs={1} sx={{ mt: 9.5 }}>
              <MenuButton
                backgroundColor={"#66CCFF"}
                width={"10vw"}
                height={"2.3vw"}
                color={"#000000"}
                path={"/"}
                buttonName={"Zaloguj"}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="flex-start"
        sx={{ mt: 1 }}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <MenuButton
            width={"11vw"}
            color={"#000000"}
            path={"/"}
            buttonName={"Rowery"}
          />

          <MenuButton
            width={"11vw"}
            color={"#000000"}
            path={"/"}
            buttonName={"Akcesoria"}
          />
          <MenuButton
            width={"11vw"}
            color={"#000000"}
            path={"/"}
            buttonName={"Części"}
          />
          <MenuButton
            width={"11vw"}
            color={"#000000"}
            path={"/"}
            buttonName={"Wyprzedaż"}
          />
          <MenuButton
            width={"11vw"}
            color={"#000000"}
            path={"/"}
            buttonName={"Serwis"}
          />
          <MenuButton
            width={"11vw"}
            color={"#000000"}
            path={"/"}
            buttonName={"Kontakt"}
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container alignContent="center" alignItems="center" sx={{ mt: 1 }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <AutoPlay />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Grid item xs={12} align="center">
          <div>
            <h1>Obserwuj Nas</h1>
            <p>
              <a href="https://www.youtube.com" style={{ color: "#eb3223" }}>
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.facebook.com" style={{ color: "#4968ad" }}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="http://www.instagram.com" style={{ color: "black" }}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://twitter.com/" style={{ color: "#49a1eb" }}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
