import React from "react";
import Layout from "../../components/layout/Layout";
import {Card, CardContent, Container, Grid, CardActions, Button, Divider} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import {makeStyles} from "@material-ui/styles";
import {ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "../../App.css";


function DashboardPage() {

    const useStyles = makeStyles(theme => {
        return {
            container: {},
            card: {
                minHeight: 200
            },
            button: {
                fontFamily: 'Poppins'
            },
            icon: {
                color: "darkblue"
            }
        }
    })

    const classes = useStyles();


    return (
        <Layout>
            <section className="section padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">Dashboard</p>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOnce={true}
                                duration={2}>
                                <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/list.svg`}
                                                    alt="Creativity logo"/>
                                            </div>
                                            <p className="title center-align uppercase grey-text">
                                                Instructors
                                            </p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                    </CardContent>
                                    <Divider variant="fullWidth" />
                                    <CardActions>
                                        <Button
                                            className={classes.button}
                                            size="large"
                                            variant="text"
                                            fullWidth={true}
                                            endIcon={<ArrowForward className={classes.icon} />}>
                                            <Link to="" className="nav-link">
                                                View Instructors
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <ScrollAnimation
                                delay={500}
                                animateIn="fadeInUp"
                                animateOnce={true}
                                duration={2}>
                                <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/student.svg`}
                                                    alt="Integrity logo"/>
                                            </div>
                                            <p className="title center-align uppercase grey-text">
                                                Students
                                            </p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                    </CardContent>
                                    <Divider variant="fullWidth" />
                                    <CardActions>
                                        <Button
                                            className={classes.button}
                                            size="large"
                                            variant="text"
                                            fullWidth={true}
                                            endIcon={<ArrowForward className={classes.icon} />}>
                                            <Link to="" className="nav-link">
                                                View Students
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <ScrollAnimation
                                delay={1000}
                                animateIn="fadeInUp"
                                animateOnce={true}
                                duration={2}>
                                <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/webinar.svg`}
                                                    alt="Healthcare logo"/>
                                            </div>
                                            <p className="title center-align uppercase grey-text">
                                                Courses
                                            </p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                    </CardContent>
                                    <Divider variant="fullWidth" />
                                    <CardActions>
                                        <Button
                                            className={classes.button}
                                            size="large"
                                            variant="text"
                                            fullWidth={true}
                                            endIcon={<ArrowForward className={classes.icon} />}>
                                            <Link to="" className="nav-link">
                                                View Courses
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <ScrollAnimation
                                delay={1500}
                                animateIn="fadeInUp"
                                animateOnce={true}
                                duration={2}>
                                <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/calendar.svg`}
                                                    alt="Teamwork logo"/>
                                            </div>
                                            <p className="title center-align uppercase grey-text">
                                                Schedule
                                            </p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                    </CardContent>
                                    <Divider variant="fullWidth" />
                                    <CardActions>
                                        <Button
                                            className={classes.button}
                                            size="large"
                                            variant="text"
                                            fullWidth={true}
                                            endIcon={<ArrowForward className={classes.icon} />}>
                                            <Link to="" className="nav-link">
                                                View Schedule
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                </Container>
            </section>

        </Layout>
    )
}

export default DashboardPage;
