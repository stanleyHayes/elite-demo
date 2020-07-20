import React from "react";
import {Container, Grid, LinearProgress} from "@material-ui/core";
import Layout from "../../components/layout/Layout";
import "../../App.css";
import {connect} from "react-redux";
import Course from "../../components/shared/Course";


function CoursesPage({courses, loading}) {
    return (
        <Layout>
            <section className="padding-vertical-huge">
                <Container>
                    {loading && <LinearProgress variant="query"/>}
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <p className="title text">Courses</p>
                        </Grid>
                        {
                            (!courses.length) ? (
                                <Grid item={true} xs={12}>
                                    <div>
                                        <p className="font-weight-bold text uppercase text-align-center">No Courses
                                            available</p>
                                    </div>
                                </Grid>
                            ) : (
                                courses.map((course, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Course course={course}/>
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
        courses: state.courses.courses,
        loading: state.courses.loading
    }
}

export default connect(mapStateToProps)(CoursesPage);
