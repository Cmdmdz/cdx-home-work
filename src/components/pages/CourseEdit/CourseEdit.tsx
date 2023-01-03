import { Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import { FormikProps, Form, Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../..";
import { Work } from "../../../tpyes/worktype";
import * as courseActions from "../../../actions/course.action";
import MenuItem from '@mui/material/MenuItem';
import { json } from "stream/consumers";
import { Course } from "../../../tpyes/course.type";


const CourseEdit: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const match = useMatch("/courseEdit/:id");
  let id = match?.params.id;
  
  const showForm = ({ values, setFieldValue, isSubmitting }: FormikProps<Work>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h4">
              Update Course
            </Typography>
            <Field style={{ marginTop: 16 }} sx={{ width: '50ch' }} component={TextField} name="course" type="text" label="Course" />
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
            <Button component={Link} to="/course" variant="outlined" fullWidth>
              Cancl
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };


  const initialValues: any = {course: "" };

  return (
    <Box>
      <Formik
        validate={(values) => {
          let errors: any = {};
          return errors;
        }}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {

          dispatch(courseActions.editCourse(values, navigate,id));
          setSubmitting(false);
        }}
      >
        {(props: any) => showForm(props)}
      </Formik>
    </Box>
  );
};

export default CourseEdit;
