import { Grid, Divider } from "@mui/material";

const Header = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <h1>Find The Words</h1>
      </Grid>
      <Grid>
        <Divider variant="middle" />
      </Grid>
    </>
  );
};

export default Header;
