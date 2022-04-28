import React, { FC } from "react";
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useTheme,
} from "@mui/material";

import Header from "../containers/Header";
import RouteController from "../routes";

const AppContext = React.createContext({
  toggleColorMode: () => {},
});
const AppConsumer: FC = () => {
  const theme = useTheme();
  const colorMode = React.useContext(AppContext);

  return (
    <Box>
      <Header theme={theme} colorMode={colorMode} />
      <Box
        sx={{
          backgroundColor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <RouteController />
      </Box>
    </Box>
  );
};
const App: FC = () => {
  const isDarkMode =
    window.localStorage.getItem("theme") === "dark" ? "dark" : "light";
  const [mode, setMode] = React.useState<"light" | "dark">(isDarkMode);
  const theme = React.useMemo(() => {
    window.localStorage.setItem("theme", mode);
    return createTheme({
      palette: {
        mode,
      },
    });
  }, [mode]);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  return (
    <AppContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppConsumer />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
