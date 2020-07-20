import React from "react";
import {Container, Grid, LinearProgress} from "@material-ui/core";
import Layout from "../../components/layout/Layout";
import "../../App.css";
import {connect} from "react-redux";
import Schedule from "../../components/shared/Schedule";


function SchedulesPage({schedules, loading}) {
    return (
        <Layout>
            <section className="padding-vertical-huge">
                <Container>
                    {loading && <LinearProgress variant="query"/>}
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <p className="title text">Schedules</p>
                        </Grid>
                        {
                            (!schedules.length) ? (
                                <Grid item={true} xs={12}>
                                    <div>
                                        <p className="font-weight-bold text uppercase text-align-center">No Schedules
                                            available</p>
                                    </div>
                                </Grid>
                            ) : (
                                schedules.map((schedule, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Schedule schedule={schedule}/>
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
        schedules: state.schedules.schedules,
        loading: state.schedules.loading
    }
}

export default connect(mapStateToProps)(SchedulesPage);
