import Grid from "@mui/material/Grid";
import MenuButton from "../MenuButton/MenuButton";
import Box from "@mui/material/Box";
import SearchInput from "./SearchInput";
import Logo from "../Logo/bike.png";
import AutoPlay from "../AutoPlay/AutoPlay";

const Home = () => {
  return (
    <>
      <Box
        style={{ backgroundColor: "#3D3D3B" }}
        sx={{ width: "100%", height: 150 }}
      >
        <Grid
          container
          direction="row"
          alignContent="center"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <img
              style={{ width: "15vw", marginTop: "2vw" }}
              src={Logo}
              alt=""
            />
          </Grid>

          <Grid item xs={2}>
            <SearchInput />
          </Grid>

          <Grid item xs={3} sx={{ mt: 10 }}>
            <MenuButton
              backgroundColor={"#920303"}
              width={"6vw"}
              height={"2.3vw"}
              color={"#000000"}
              path={"/"}
              buttonName={"Koszyk"}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="flex-start"
        sx={{ mt: 2 }}
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Rowery"}
          />

          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Akcesoria"}
          />
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Części"}
          />
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Wyprzedaż"}
          />
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Serwis"}
          />
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Kontakt"}
          />
        </Grid>

        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <AutoPlay />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
};

export default Home;
