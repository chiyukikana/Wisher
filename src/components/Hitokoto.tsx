import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import request from "../services/request";

const Hitokoto: FC = () => {
  const [state, setState] = React.useState<IState>({});

  React.useEffect(() => {
    request("https://v1.hitokoto.cn/?c=a&c=b&c=d").then(({ data }) =>
      setState({ ...data })
    );
  }, []);

  return state.hitokoto ? (
    <Box sx={{ pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {state.from}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        {state.hitokoto}
      </Typography>
    </Box>
  ) : null;
};

export default Hitokoto;

interface IState {
  id?: number;
  uuid?: string;
  hitokoto?: string;
  type?: string;
  from?: string;
  from_who?: any;
  creator?: string;
  creator_uid?: number;
  reviewer?: number;
  commit_from?: string;
  created_at?: string;
  length?: number;
}
