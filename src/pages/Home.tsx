import { FC, Suspense } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Html, Javascript, GitHub } from "@mui/icons-material";

import Hitokoto from "../components/Hitokoto";
import Loading from "../components/Loading";

const Home: FC = () => {
  return (
    <Box>
      <Container maxWidth="sm">
        <Hitokoto />
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<GitHub />}
            component={Link}
            to="/github-projects"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            startIcon={<Html />}
            component={Link}
            to="/h5"
          >
            HTML5 & CSS3
          </Button>
          <Button
            variant="contained"
            startIcon={<Javascript />}
            component={Link}
            to="/js"
          >
            JavaScript
          </Button>
        </Stack>
      </Container>
      <Suspense fallback={<Loading blur />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Home;
