import React from "react";
import {Container, Grid, LinearProgress} from "@material-ui/core";
import Layout from "../../components/layout/Layout";
import "../../App.css";
import {connect} from "react-redux";
import Course from "../../components/shared/Course";
import Student from "../../components/shared/Student";


function StudentsPage({students, loading}) {
    return (
        <Layout>
            <section className="padding-vertical-huge">
                <Container>
                    {loading && <LinearProgress variant="query"/>}
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <p className="title text">Students</p>
                        </Grid>
                        {
                            (!students.length) ? (
                                <Grid item={true} xs={12}>
                                    <div>
                                        <p className="font-weight-bold text uppercase text-align-center">No Students
                                            available</p>
                                    </div>
                                </Grid>
                            ) : (
                                students.map((student, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Student student={student}/>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>
                </Container>
            </section>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        students: state.students.students,
        loading: state.students.loading
    }
}

export default connect(mapStateToProps)(StudentsPage);
