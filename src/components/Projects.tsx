import {
  Card,
  CardContent,
  Typography,
  Container,
  CardActions,
  Grid,
  Button,
} from "@mui/material";
import { FC } from "react";

const projectList = [
  {
    title: "Treasure Hunter",
    date: "Apr 18",
    detailLink: "https://github.com/chiyukikana/Treasure-Hunter/",
    playLink:
      "https://treasure-hunter-8guesx1c28d6e82c-1256732922.ap-shanghai.app.tcloudbase.com/",
  },
  {
    title: "Fruits Battle",
    date: "Dec 29",
    detailLink: "https://github.com/chiyukikana/FruitsBattle",
    playLink:
      "https://fruits-battle-6gyadt9u2aaa28c8-1256732922.ap-shanghai.app.tcloudbase.com/",
  },
  {
    title: "Sky Angel",
    date: "Apr 17",
    detailLink: "https://github.com/chiyukikana/SkyAngel",
    playLink:
      "https://sky-angel-0gqddlxz8bd6f687-1256732922.ap-shanghai.app.tcloudbase.com/",
  },
];
const Projects: FC = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Grid container justifyContent="space-evenly" alignItems="top">
        {projectList.map(({ title, date, detailLink, playLink }) => {
          return (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  GitHub Project
                </Typography>
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" target="_blank" href={detailLink}>
                  查看更多
                </Button>
                <Button size="small" target="_blank" href={playLink}>
                  现在体验
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Projects;
