import { FC } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { OpenInNewRounded } from "@mui/icons-material";

const Wishlist: FC<WishlistProps> = (props) => {
  const { list } = props;

  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      {list
        .map(({ chapter, tutorials, type }, index) => {
          return (
            <Box key={index}>
              <Divider sx={{ mb: 4 }}>
                <Typography component="h3" variant="h4" color="text.primary">
                  CHAPTER.{chapter}
                </Typography>
              </Divider>
              <Grid container justifyContent="space-evenly" alignItems="top">
                {tutorials
                  .map(({ description, folder, title }, index) => {
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    const a = (Math.random() * 6 + 3) / 10;

                    return (
                      <Grid item key={index} sx={{ mb: 4, mx: 4 }}>
                        <Card sx={{ width: 300 }}>
                          <CardMedia
                            component="span"
                            sx={{
                              height: 10,
                              backgroundColor: `rgba(${r},${g},${b},${a});`,
                            }}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {description ? description : title}
                            </Typography>
                          </CardContent>
                          <CardActions sx={{ justifyContent: "flex-end" }}>
                            <Tooltip
                              title="在新窗口中打开"
                              TransitionComponent={Zoom}
                              TransitionProps={{ timeout: 200 }}
                              placement="left"
                            >
                              <IconButton
                                color="primary"
                                size="small"
                                component="a"
                                href={`./wishlist/w${type}/${chapter}/${folder}/index.html`}
                                target="_blank"
                              >
                                <OpenInNewRounded />
                              </IconButton>
                            </Tooltip>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })
                  .reverse()}
              </Grid>
            </Box>
          );
        })
        .reverse()}
    </Container>
  );
};

export default Wishlist;

type WishlistProps = {
  list: IProps[];
};

interface IProps {
  type: string;
  chapter: number;
  tutorials: {
    title: string;
    description: string;
    folder: number;
  }[];
}
