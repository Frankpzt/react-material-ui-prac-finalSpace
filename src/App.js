import { useEffect, useState } from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import style from "./App.module.scss"
import Grid from "@material-ui/core/Grid";
function App() {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
  //   .then((res) => res.json())
  //   .then((data) => setData(data))
  // }, [])

  useEffect(() => {
    axios.get('https://finalspaceapi.com/api/v0/character/?limit=12')
    .then(res => setData(res.data)) 
  },[])

  console.log("not in the effect hook");
  return (
    <>
        <Container center="true" className={style.container}>
          <Typography color="textPrimary" gutterBottom variant="h1" center="true">
            Final Space Characters:
          </Typography>
            <Grid container spacing={3}>
              {data.map((character) => {
                  return<Grid item xs={12} sm={4} key={character.id}>
                    <div>
                      <Card className={style.charCard}>
                        <CardContent>
                        <Typography color="primary" gutterBottom variant="h5" center="true">
                          {character.name}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom variant="subtitle1" center="true">
                          {character.name}
                        </Typography>
                        </CardContent>
                        <CardMedia classNmae={style.charCardImg} image={character.img_url} style= {{height: "300px"}}/>
                      </Card>
                    </div>
                  </Grid>
                })}
            </Grid>
        </Container>
    </>
  );
}

export default App;
