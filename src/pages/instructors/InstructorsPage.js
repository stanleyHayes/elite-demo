import React from "react";
import {Container, Grid, LinearProgress} from "@material-ui/core";
import Layout from "../../components/layout/Layout";
import "../../App.css";
import {connect} from "react-redux";
import Course from "../../components/shared/Course";
import Instructor from "../../components/shared/Instructor";


function InstructorsPage({instructors, loading}) {
    return (
        <Layout>
            <section className="padding-vertical-huge">
                <Container>
                    {loading && <LinearProgress variant="query"/>}
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <p className="title text">Instructors</p>
                        </Grid>
                        {
                            (!instructors.length) ? (
                                <Grid item={true} xs={12}>
                                    <div>
                                        <p className="font-weight-bold text uppercase text-align-center">No Instructors
                                            available</p>
                                    </div>
                                </Grid>
                            ) : (
                                instructors.map((instructor, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Instructor instructor={instructor}/>
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
        instructors: state.instructors.instructors,
        loading: state.instructors.loading
    }
}

export default connect(mapStateToProps)(InstructorsPage);
