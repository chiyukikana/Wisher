import { FC } from "react";
import { CircularProgress, styled } from "@mui/material";

const MaskBox = styled("div")({
  position: "fixed",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
});
const Loading: FC<LoadingProps> = (props) => {
  const zIndex = 999;

  return (
    <MaskBox
      sx={{
        zIndex,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaskBox
        sx={{
          backgroundColor: "background.paper",
          opacity: props.blur ? 0.8 : 1,
        }}
      />
      <CircularProgress sx={{ zIndex: zIndex + 1 }} />
    </MaskBox>
  );
};

export default Loading;

interface LoadingProps {
  /** 显示背景淡化效果 */
  blur?: boolean;
}
