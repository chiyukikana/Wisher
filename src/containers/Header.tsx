import { FC } from "react";
import {
  AppBar,
  IconButton,
  Theme,
  Toolbar,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { DarkMode, GitHub, LightMode } from "@mui/icons-material";

const Header: FC<HeaderProps> = (props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <GitHub sx={{ mr: 2 }} />
        <Typography noWrap variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          Wisher
        </Typography>
        <Tooltip
          title="切换颜色主题"
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 200 }}
        >
          <IconButton color="inherit" onClick={props.colorMode.toggleColorMode}>
            {props.theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

interface HeaderProps {
  theme: Theme;
  colorMode: { toggleColorMode: () => void };
}
