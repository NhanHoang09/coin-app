import React from "react";
import { Box, Paper } from "@mui/material";
import MultiAxisLine from "./../Charts/Charts";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default function RightBar() {
  return (
    <Root>
      <Box sx={{ right: 30 }} position="fixed">
        <MultiAxisLine />
        <Paper sx={{ maxWidth: "100%", marginTop: "18px" }}>
          <MenuList>
            <MenuItem>
              <ListItemText>
                <Typography variant="h5" color="secondary">
                  <LocalFireDepartmentIcon />
                  Trending
                </Typography>
              </ListItemText>
              <Typography
                variant="body2"
                color="primary"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                More
                <ArrowRightIcon />
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Typography variant="body2" color="text.secondary">
                  1
                </Typography>
              </ListItemIcon>
              <ListItemText>Bitcoin (BTC) </ListItemText>
              <Typography variant="body2" color="green">
                +1,14%
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Typography variant="body2" color="text.secondary">
                  2
                </Typography>
              </ListItemIcon>
              <ListItemText>Ethereum (ETH)</ListItemText>
              <Typography variant="body2" color="green">
                +8,57%
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Typography variant="body2" color="text.secondary">
                  3
                </Typography>
              </ListItemIcon>
              <ListItemText>Solana (SOL)</ListItemText>
              <Typography variant="body2" color="green">
                +21,06%
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Typography variant="body2" color="text.secondary">
                  4
                </Typography>
              </ListItemIcon>
              <ListItemText>Dogecoin (DOGE)</ListItemText>
              <Typography variant="body2" color="error">
                -12,61%
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
        <Paper sx={{ maxWidth: "100%", marginTop: "18px" }}>
          <MenuList>
            <MenuItem>
              <ListItemText>
                <Typography variant="h5" color="secondary">
                  <ShowChartIcon />
                  Biggest Gainers
                </Typography>
              </ListItemText>
              <Typography
                variant="body2"
                color="primary"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                More
                <ArrowRightIcon />
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Typography variant="body2" color="text.secondary">
                  1
                </Typography>
              </ListItemIcon>
              <ListItemText>Coin of Nature (CON)</ListItemText>
              <Typography variant="body2" color="green">
                +1034.59%
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Typography variant="body2" color="text.secondary">
                  2
                </Typography>
              </ListItemIcon>
              <ListItemText>Chihuahua (HUA)</ListItemText>
              <Typography variant="body2" color="green">
                +932.43%
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Typography variant="body2" color="text.secondary">
                  3
                </Typography>
              </ListItemIcon>
              <ListItemText>Squid Game (SQUID)</ListItemText>
              <Typography variant="body2" color="green">
                +727.60%
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Typography variant="body2" color="text.secondary">
                  4
                </Typography>
              </ListItemIcon>
              <ListItemText>MAGA Coin (MAGA)</ListItemText>
              <Typography variant="body2" color="green">
                +264.08%
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      </Box>
    </Root>
  );
}
