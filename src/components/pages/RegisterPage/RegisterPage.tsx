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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Field, Formik, FormikProps } from "formik";
import { Customer } from "../../../tpyes/customer.type";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "../../../reducers";
import * as registerActions from "../../../actions/register.action";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

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

const RegisterPage: React.FC<any> = () => {
  const registerReducer = useSelector((state: RootReducers) => state.registerReducer);
  const [status, setStatus] = React.useState('');

  const statusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch<any>()
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
            ลงทะเบียนผู้ใช้
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  onChange={handleChange}
                  value={values.email}
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="first_name"
                  label="Firstname"
                  onChange={handleChange}
                  value={values.first_name}
                  autoComplete="first_name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="last_name"
                  label="Lastname"
                  onChange={handleChange}
                  value={values.last_name}
                  autoComplete="last_name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>

                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="status" value="1" />
                    Student
                  </label>
                  <label>
                    <Field type="radio" name="status" value="2" />
                    Teacher
                  </label>
                </div>
              </Grid>

              <Grid item xs={12}>
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ลงทะเบียน
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  ฉันมีบัญชีผู้ใช้งานแล้ว
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
          onSubmit={async (values, { }) => {
            dispatch(registerActions.register(values, navigate));
          }}
          initialValues={initialValues}
        >
          {(props) => showForm(props)}
        </Formik>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default RegisterPage;
