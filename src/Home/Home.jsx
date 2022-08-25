import Grid from "@mui/material/Grid";
import MenuButton from "../MenuButton/MenuButton";
import Box from "@mui/material/Box";
import SearchInput from "./SearchInput";

const Home = () => {
  return (
    <>
      <Box
        style={{ backgroundColor: "darkgrey" }}
        sx={{ width: "100%", height: 150 }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={7}></Grid>
          {/* <Grid item xs={1} sm={4} md={2} lg={2} xl={2}>
            <img src={} alt="" />
          </Grid> */}
          <Grid item xs={5}>
            <SearchInput />
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="flex-start"
        sx={{ mt: 2 }}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Rowery"}
          />
          <MenuButton
            width={150}
            color={"#000000"}
            path={"/"}
            buttonName={"Rowery Elektryczne"}
          />
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"Akcesoria"}
          />
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"Części"}
          />
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"Wyprzedaż"}
          />
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"Serwis"}
          />
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"Kontakt"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
