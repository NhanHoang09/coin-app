import React, { useState } from "react";
import { Box, Tab, Tabs, Container } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function LeftBar() {
  const [tableValue, setTableValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTableValue(newValue);
  };
  return (
    <Root>
      <Container position="relative">
        <Box mt={10} position="fixed" sx={{ left: "70px" }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={tableValue}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 0, borderColor: "divider" }}
          >
            <Tab label="Tin tức Coin"></Tab>
            <Tab label="Bitcoin"></Tab>
            <Tab label="Etherium"></Tab>
            <Tab label="Binance"></Tab>
            <Tab label="NFT"></Tab>
            <Tab label="Nổi bật"></Tab>
            <Tab label="Tổng hợp"></Tab>
            <Tab label="Chuyên Sâu"></Tab>
          </Tabs>
        </Box>
      </Container>
    </Root>
  );
}
