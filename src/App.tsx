import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { blueGrey, blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./components/pages/LoginPage";
import PublicRoutes from "./router/public.routes";
import ProtectedRoutes from "./router/protected.routes";
import RegisterPage from "./components/pages/RegisterPage";
import * as loginActions from "./actions/login.action";
import { RootReducers } from "./reducers";
import Course from "./components/pages/Course";
import HomeWork from "./components/pages/HomeWork";
import Student from "./components/pages/Student";
import HomeWorkAdd from "./components/pages/HomeWorkAdd";
import HomeWorkEdit from "./components/pages/HomeWorkEdit";
import CourseAdd from "./components/pages/CourseAdd";
import CourseEdit from "./components/pages/CourseEdit";
import CustomerView from "./components/pages/CustomerView";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage:
            "url(" +
            `${process.env.PUBLIC_URL}/images/background_menu.jpg` +
            ")",
          width: drawerWidth,
        },
      },
    },
  },
  typography: {
    fontFamily: "Fredoka",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  spacing: 8,
  palette: {
    primary: process.env.REACT_APP_IS_PRODUCTION == "0" ? blue : blueGrey,
    background: {
      default: "#CFD2D6",
    },
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch<any>();
  const loginReducer = useSelector((state: RootReducers) => state.loginReducer);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {

    dispatch(loginActions.restoreLogin());
  }, []);

  const background = () => {
    if (loginReducer.result) {
      return "url(" + `${process.env.PUBLIC_URL}/images/background.jpg` + ")";
    } else {
      return "";
    }

  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {loginReducer.result && (
          <Header open={open} onDrawerOpen={handleDrawerOpen} />
        )}
        {loginReducer.result && (
          <Menu open={open} onDrawerClose={handleDrawerClose} />
        )}

        <Main
          open={open}
          // sx={{ backgroundImage: background(), height: "100vh" }}
        >
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/course" element={<Course />} />
              <Route path="/homework" element={<HomeWork />} />
              <Route path="/student" element={<Student />} />
              <Route path="/create" element={<HomeWorkAdd />} />
              <Route path="/edit/:id" element={<HomeWorkEdit />} />
              <Route path="/courseAdd" element={<CourseAdd />} />
              <Route path="/courseEdit/:id" element={<CourseEdit />} />
              <Route path="/customer/:id" element={<CustomerView />} />
            </Route>
          </Routes>

        </Main>
      </Box>
    </ThemeProvider>
  );
}

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default App;
