// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box, CardHeader, CardMedia, Paper } from "@mui/material";
import data from "src/data/content";
import { useSettings } from "src/@core/hooks/useSettings";

const Home = () => {
  const { settings } = useSettings();
  const { mode } = settings;
  return (
    <Grid container rowGap={20}>
      <Box
        sx={{
          backgroundImage: "url(/images/logo.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "250px 250px",
          backgroundPositionX: "50%",
          paddingTop: 34,
        }}
      >
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
            Somos un equipo de visionarios dedicados al desentrañamiento de
            datos. <br />
            En Weibull, convergen expertos en análisis de datos y desarrollo de
            sistemas, listos para transformar la información en soluciones
            estratégicas.
          </Typography>
        </Grid>
      </Box>
      <Grid item sm={12}>
        <Grid container>
          <Grid md={6} alignSelf={"center"}>
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
            <Paper sx={{ width: 500, height: 300 }} elevation={8}>
              <img
                src="/images/pages/who-we-are.jpg"
                width={500}
                height={300}
                style={{ borderRadius: 8, objectFit: "cover" }}
              />
            </Paper>
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
          {data.philosophy.content.map((item, index) => {
            let img = "";
            switch (index) {
              case 0:
                img = "/images/pages/philosophy/mission.jpg";
                break;
              case 1:
                img = "/images/pages/philosophy/vision.jpg";
                break;
              case 2:
                img = "/images/pages/philosophy/values.jpg";
                break;
              default:
                break;
            }

            return (
              <Grid xs={12} md={3} mx={10}>
                <Card>
                  <CardMedia>
                    <img src={img} width={"100%"} />
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
            );
          })}
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Box sx={{ backgroundColor: "#b29e84", padding: 10, borderRadius: 2 }}>
          <Grid
            container
            flexDirection={"row"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Grid sm={12} md={6}>
              <img
                src="/images/pages/process.jpg"
                style={{
                  objectFit: "cover",
                  borderRadius: 8,
                }}
                height={250}
                width={"90%"}
              />
            </Grid>
            <Grid sm={12} md={6}>
              <Typography variant="h3" color={"#000"}>
                Proceso
              </Typography>
              <Typography color={"#000"} sx={{ fontSize: 18 }} mt={8}>
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
          {data.services.content.details.map((element, index) => {
            let img = "";
            console.log(mode);
            switch (index) {
              case 0:
                img = "/images/pages/services/muestreo.jpg";
                break;
              case 1:
                img = "/images/pages/services/modelado.jpg";
                break;
              case 2:
                img = "/images/pages/services/desarrollo.jpg";
                break;
              case 3:
                img = "/images/pages/services/investigacion.jpg";
                break;
              case 4:
                img = "/images/pages/services/proyecciones.jpg";
                break;
              case 5:
                img = "/images/pages/services/optimizacion.jpg";
                break;
              case 6:
                img = "/images/pages/services/toma-decisiones.jpg";
                break;
              case 7:
                img = "/images/pages/services/habilidades.jpg";
                break;
              default:
                break;
            }
            return (
              <Paper
                square
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingY: 10,
                  height: 200,
                  width: "45%",
                  margin: 1,
                  backgroundImage:
                    mode === "light"
                      ? `linear-gradient(to bottom, rgba(200, 200, 200, .75), rgba(220,220, 220, .75)), url(${img})`
                      : `linear-gradient(to bottom, rgba(20, 20, 20, .75), rgba(50,50 ,50, .85)), url(${img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "center",
                }}
                elevation={4}
                className="paper-like"
              >
                <Typography
                  fontSize={{ sm: 18, md: 22, lg: 26 }}
                  fontWeight={200}
                  align="center"
                >
                  {element}
                </Typography>
              </Paper>
            );
          })}
        </Grid>
      </Grid>
      <Grid sm={12}>
        <Typography variant="h2">Beneficios</Typography>
        <Typography fontSize={"1.2em"}>
          Al trabajar con Weibull, disfrutarás de:
        </Typography>
        <Grid container>
          {data.benefits.content.details.map((element, index) => {
            let color = "";
            if (index % 2 === 0) {
              color = mode === "light" ? "#a3927c" : "#7a5c42 ";
            } else if (index % 3 === 0) {
              color = mode === "light" ? "#6b8b7c" : "#5b614d";
            } else {
              color = mode === "light" ? "#c7c5c2" : "#4e4944";
            }
            return (
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                  height: 180,
                  margin: 5,
                  backgroundColor: color,
                }}
              >
                <CardContent>
                  <Typography
                    fontSize={{ sm: 18, md: 20 }}
                    fontWeight={"600"}
                    align="center"
                  >
                    {element}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
