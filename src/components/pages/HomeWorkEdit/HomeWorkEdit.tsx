import { Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import { FormikProps, Form, Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../..";
import { Work } from "../../../tpyes/worktype";
import * as workActions from "../../../actions/work.action";
import MenuItem from '@mui/material/MenuItem';
import { json } from "stream/consumers";
import { useEffect } from "react";


const HomeWorkEdit: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const match = useMatch("/edit/:id");
  let id = match?.params.id;

  

  const showForm = ({ values, setFieldValue, isSubmitting }: FormikProps<Work>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h4">
              Create Work
            </Typography>

            <Field style={{ marginTop: 16 }} sx={{ width: '50ch' }} component={TextField} name="title" type="text" label="Title" />

            <Field style={{ marginTop: 16 }} sx={{ m: 1, width: '50ch' }} component={TextField} name="deadline" type="text" label="Deadline" />
            <br></br>
            <Field style={{ marginTop: 16 }} sx={{ width: '50ch' }} component={TextField} name="course" type="number" label="Course" />

            <Field style={{ marginTop: 16 }} sx={{ m: 1, width: '50ch' }} component={TextField} name="status_work" type="number" label="Status" />

          </CardContent>
          <CardActions>
            <Button
              disabled={isSubmitting}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: 1 }}
            >
              Update
            </Button>
            <Button component={Link} to="/homework" variant="outlined" fullWidth>
              Cancl
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };


  const initialValues: Work = { id: 0,title: "", deadline: "", course: 0, status_work: 0 };

  return (
    <Box>
      <Formik
        validate={(values) => {
          let errors: any = {};
          return errors;
        }}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
        
          dispatch(workActions.editWork(values, navigate,id));
          setSubmitting(false);
        }}
      >
        {(props: any) => showForm(props)}
      </Formik>
    </Box>
  );
};

export default HomeWorkEdit;
