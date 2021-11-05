import { Grid, Item } from "@mui/material";
import Charts from "./components/Charts/Charts";
import LeftBar from "./components/LeftBar/LeftBar";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import RightBar from "./components/RightBar/RightBar";

function App() {
  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <LeftBar />
        </Grid>
        <Grid item xs={7}>
          <Content />
        </Grid>
        <Grid item xs={3}>
          <RightBar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
