import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const MenuButton = (props) => {
  const { icon, buttonName, path, backgroundColor, color, width, height } =
    props;
  return (
    <>
      <Button
        component={Link}
        to={path}
        style={{
          backgroundColor: backgroundColor,
          textTransform: "none",
          fontstyle: "normal",
          fontweight: 400,
          fontsize: 14,
          lineheight: 12,
          width: width ? width : 97,
          height: height ? height : 57,
          color: "black",
          borderRadius: 10,
          color: color,
          textAlign: " center",
        }}
      >
        <Grid item xs={12}>
          <img src={icon} alt="" />
        </Grid>
        <Grid item xs={12}>
          <span style={{ marginRight: "1.3vw" }}>{buttonName}</span>
        </Grid>
      </Button>
    </>
  );
};

export default MenuButton;
