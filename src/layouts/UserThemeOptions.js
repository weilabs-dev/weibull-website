// ** To use core palette, uncomment the below import
// import corePalette from 'src/@core/theme/palette'
// ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
import { useSettings } from "src/@core/hooks/useSettings";
const UserThemeOptions = () => {
  // ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
  const { settings } = useSettings();
  // ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
  const { mode, skin, themeColor } = settings;
  // ** To use core palette, uncomment the below line
  // const palette = corePalette(mode, skin, themeColor)\

  return {
    palette: {
      primary: {
        light: "#F6F4F1",
        main: "#7C898B",
        dark: "#FFF",
        contrastText: "#FFF",
      },
      secondary: {
        light: "#FFF",
        main: "#045",
        dark: "#123",
        contrastText: "#abc",
      },
      text: {
        primary: mode == "light" ? "#423e3a" : "#7c898b ",
        secondary: mode == "light" ? "#123" : "#999",
      },
      background: {
        paper: mode === "light" ? "#fff" : "rgba(23, 32, 34, 0.8)",
        default: mode === "light" ? "#f6f4f1" : "#253439",
      },
    },
  };
};

export default UserThemeOptions;
