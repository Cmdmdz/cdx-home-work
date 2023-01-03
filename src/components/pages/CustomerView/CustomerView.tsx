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
import { Link, useMatch, useNavigate } from "react-router-dom";
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


export default function CustomerView() {
  const customerReducer = useSelector((state: RootReducers) => state.customerReducers);
  const dispatch = useAppDispatch();
  const [keywordSearch, setKeywordSearch] = useDebounce<string>("", 1000);
  const [keywordSearchNoDelay, setKeywordSearchNoDelay] = React.useState<string>("");
  const [selectedProduct, setSelectedProduct] = React.useState<Customer | null>(null);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const navigate = useNavigate();


  const match = useMatch("/customer/:id");
  let id = match?.params.id;

  React.useEffect(() => {
    dispatch(customerActions.loadListCustomerById(id));
  }, []);


  const stockColumns: GridColDef[] = [
    {
      headerName: "ID",
      field: "id",
      width: 50,
    },
    {
      headerName: "TITLE",
      field: "title",
      width: 150,
    },
    
    {
      headerName: "course",
      field: "course__course",
      width: 150,
    },
    {
      headerName: "DEADLINE",
      width: 120,
      field: "deadline",
    },
    {
      headerName: "STATUS",
      width: 150,
      field: "status_work__approve",
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
