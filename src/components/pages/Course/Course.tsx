import * as React from "react";
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import * as courseAction from "../../../actions/course.action";
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

import { useAppDispatch } from "../../..";
import { Course } from "../../../tpyes/course.type";
import { useNavigate } from "react-router-dom";

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}


export default function StockPage() {
  const courseReducer = useSelector((state: RootReducers) => state.courseReducer);
  const dispatch = useAppDispatch();
  const [keywordSearchNoDelay, setKeywordSearchNoDelay] = React.useState<string>("");
  const [selectedProduct, setSelectedProduct] = React.useState<Course | null>(null);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const navigate = useNavigate();


  React.useEffect(() => {
    dispatch(courseAction.loadListCourse());
  }, []);

  const stockColumns: GridColDef[] = [
    {
      headerName: "ID",
      field: "id",
      width: 50,
    },
    {
      headerName: "COURSE",
      field: "course",
      width: 150,
    },
    {
      headerName: "ACTION",
      field: ".",
      width: 120,
      renderCell: ({ row }: GridRenderCellParams<string>) => (
        <Stack direction="row">
          <IconButton
            aria-label="edit"
            size="large"
            onClick={() => {
              navigate("/CourseEdit/" + row.id);
            }}
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          
        </Stack>
      ),
    },
  ];

  const handleDeleteConfirm = () => {
    dispatch(courseAction.deleteCourse(String(selectedProduct!.id!)));
    setOpenDialog(false);
  };

  const showDialog = () => {
    if (selectedProduct === null) {
      return "";
    }

    return (
      <Dialog
        open={openDialog}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">You cannot restore deleted homework.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="info">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box>
  
      <DataGrid
        sx={{ backgroundColor: "white", height: "70vh" }}
        rows={courseReducer.result}
        columns={stockColumns}
        pageSize={15}
        rowsPerPageOptions={[15]}
      />

      {showDialog()}
    </Box>
  );
}
