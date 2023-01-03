import * as React from "react";
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// import { imageUrl } from "../../../Constants";
import * as customerActions from "../../../actions/customer.action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "../../../reducers";
import {
  Typography,
  Stack,
  IconButton,
  Box,
  TextField,
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,

} from "@mui/material";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import { Add, AddShoppingCart, AssignmentReturn, Clear, NewReleases, Search, Star } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce, useDebounceCallback } from "@react-hook/debounce";
// import {  } from "../../../types/worktpye.ts.type";
import { useAppDispatch } from "../../..";
import { Work } from "../../../tpyes/worktype";
import { Customer } from "../../../tpyes/customer.type";

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}

function QuickSearchToolbar(props: QuickSearchToolbarProps) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <Search fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <Clear fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />

      <Fab
        color="primary"
        aria-label="add"
        component={Link}
        to="/create"
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <Add />
      </Fab>
    </Box>
  );
}

export default function Student() {
  const customerReducer = useSelector((state: RootReducers) => state.customerReducers);
  const dispatch = useAppDispatch();
  const [keywordSearch, setKeywordSearch] = useDebounce<string>("", 1000);
  const [keywordSearchNoDelay, setKeywordSearchNoDelay] = React.useState<string>("");
  const [selectedProduct, setSelectedProduct] = React.useState<Customer | null>(null);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const navigate = useNavigate();


  React.useEffect(() => {
    dispatch(customerActions.loadListCustomer());
  }, []);

  const stockColumns: GridColDef[] = [
    {
      headerName: "ID",
      field: "id",
      width: 50,
    },
    {
      headerName: "Email",
      field: "email",
      width: 150,
    },
    
    {
      headerName: "FIRSTNAMR",
      field: "first_name",
      width: 150,
    },
    {
      headerName: "LASTNAME",
      width: 120,
      field: "last_name",
    },
    {
      headerName: "STATUS",
      width: 120,
      field: "status",
    },
    {
      headerName: "ACTION",
      field: ".",
      width: 120,
      renderCell: ({ row }: GridRenderCellParams<string>) => (
        <Stack direction="row">
          <IconButton
            aria-label="view"
            size="large"
            onClick={() => {
              navigate("/customer/" + row.id);
            }}
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
         
        </Stack>
      ),
    },
  ];

  return (
    <Box>
  
      <DataGrid
        componentsProps={{
          toolbar: {
            value: keywordSearchNoDelay,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setKeywordSearch(e.target.value);
              setKeywordSearchNoDelay(e.target.value);
            },
            clearSearch: () => {
              setKeywordSearch("");
              setKeywordSearchNoDelay("");
            },
          },
        }}
        sx={{ backgroundColor: "white", height: "70vh" }}
        rows={customerReducer.result}
        columns={stockColumns}
        pageSize={15}
        rowsPerPageOptions={[15]}
      />

    </Box>
  );
}
