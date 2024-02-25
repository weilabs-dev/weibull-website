// ** MUI Imports
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}`}
        <Link target="_blank">Weibull</Link>
      </Typography>
      {hidden ? null : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            "& :not(:last-child)": { mr: 4 },
          }}
        >
          <Link target="_blank" href="https://mui.com/store/license/">
            Email: contacto@weibull.mx
          </Link>
          <Link
            target="_blank"
            href="https://mui.com/store/contributors/themeselection/"
          >
            Telefono: +52 (33) 3355 - 3365
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default FooterContent;
