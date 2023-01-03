import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, FormikProps } from "formik";
import { Customer } from "../../../tpyes/customer.type";
import * as loginActions from "../../../actions/login.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const LoginPage: React.FC<any> = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const showForm = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<Customer>) => {
    return (
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            เข้าสู่ระบบ
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              onChange={handleChange}
              value={values.email}
              autoComplete="email"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              onChange={handleChange}
              value={values.password}
              type="password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ยืนยัน
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ลืมหรัสผ่าน ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"ลงทะเบียนผู้ใช้"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
    );
  };

  const initialValues: Customer = { id:0,email: "", password: "", first_name: "", last_name: "", status: "" };
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Formik
          onSubmit={(values, { }) => {
            dispatch(loginActions.login(values, navigate));
          }}
          initialValues={initialValues}
        >
          {(props) => showForm(props)}
        </Formik>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
