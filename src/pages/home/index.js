// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box, CardHeader, CardMedia, Paper } from "@mui/material";
import data from "src/data/content";

const Home = () => {
  return (
    <Grid container rowGap={20}>
      <Grid
        item
        sm={12}
        textAlign={"center"}
        my={30}
        mx={{ sm: 10, md: 50 }}
        alignSelf={"center"}
      >
        <Typography variant="h2">¿Quiénes Somos?</Typography>
        <Typography sx={{ fontSize: "1.5em" }} mt={4}>
          Somos un equipo de visionarios dedicados al desentrañamiento de datos.{" "}
          <br />
          En Weibull, convergen expertos en análisis de datos y desarrollo de
          sistemas, listos para transformar la información en soluciones
          estratégicas.
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Grid container>
          <Grid sm={6} alignSelf={"center"}>
            <Typography variant="h2">¿Qué hacemos?</Typography>
            <Typography sx={{ fontSize: "1.2em" }} mt={5}>
              Impulsamos decisiones estratégicas respaldadas por ciencia.
              <br />
              Desde la detección de datos faltantes hasta la toma de decisiones
              instantáneas, Weibull diseña muestreos y realiza análisis variados
              para proporcionar claridad y soluciones fundamentadas.
            </Typography>
          </Grid>
          <Grid sm={1} />
          <Grid sm={4}>
            <img
              src="/images/pages/who-we-are.jpg"
              width={"100%"}
              style={{ borderRadius: 8 }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid sm={12} my={18} textAlign={"center"}>
        <Typography variant="h3">Áreas de Enfoque</Typography>
        <Typography sx={{ fontSize: 18, fontWeight: 500 }} my={4}>
          Dirigimos nuestro expertise a áreas clave:
        </Typography>
        <Grid container>
          {data.focusAreas.content.details.map((element) => (
            <Grid xs={12} md={4} padding={4}>
              <Card>
                <CardContent sx={{ width: { sm: "80vw", md: "100%" } }}>
                  <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
                    {element}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item sm={12} textAlign={"center"}>
        <Typography variant="h3" mb={10}>
          Filosofía
        </Typography>
        <Grid container justifyContent={"center"} rowGap={10}>
          {data.philosophy.content.map((item) => (
            <Grid xs={12} md={3} mx={10}>
              <Card>
                <CardMedia>
                  <img src="https://placehold.co/400x300" width={"100%"} />
                </CardMedia>
                <CardHeader title={item.title}>
                  <Typography variant="h5">{item.title}:</Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Box sx={{ backgroundColor: "#ddd", padding: 10, borderRadius: 2 }}>
          <Grid
            container
            flexDirection={"row"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Grid sm={12} md={6}>
              <img
                src="https://placehold.co/500x200/000000/FFF"
                height={200}
                width={500}
              />
            </Grid>
            <Grid sm={12} md={6}>
              <Typography variant="h3">Proceso</Typography>
              <Typography sx={{ fontSize: 18 }} mt={8}>
                Nuestro proceso abarca desde la prospección hasta el
                seguimiento, incluyendo el entendimiento del tema, el
                preanálisis, la propuesta y ejecución de proyectos, así como la
                entrega y seguimiento de resultados.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid sm={12}>
        <Typography variant="h2">Servicios</Typography>
        <Typography fontSize={"1.2em"}>
          Ofrecemos una gama de servicios:
        </Typography>
        <Grid container columns={{ xs: 1, sm: 2 }} mt={5}>
          {data.services.content.details.map((element) => (
            <Paper
              onHover={{
                backgroundColor: "blue",
              }}
              square
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingY: 10,
                height: 200,
                width: "45%",
                margin: 1,
              }}
              elevation={4}
              className="paper-like"
            >
              <Typography fontSize={18} fontWeight={200} align="center">
                {element}
              </Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
      <Grid sm={12}>
        <Typography variant="h2">Beneficios</Typography>
        <Typography fontSize={"1.2em"}>
          Al trabajar con Weibull, disfrutarás de:
        </Typography>
        <Grid container>
          {data.benefits.content.details.map((element) => (
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 200,
                height: 180,
                margin: 5,
              }}
            >
              <CardContent>
                <Typography fontSize={18} fontWeight={"600"} align="center">
                  {element}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
