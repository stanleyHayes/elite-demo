import React from "react";
import {Container, Grid, Card, CardContent} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "../../components/layout/Layout";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";

function AboutPage() {

    const useStyles = makeStyles(theme => {
        return {
            container: {},
            card: {
                minHeight: 300
            }
        }
    })

    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.container}>
                <section className="section padding-vertical-big">
                    <Container>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12}>
                                <p className="uppercase margin-vertical-large sub-header">Mission & Vision</p>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <Card raised={true} elevation={1} variant="elevation">
                                        <CardContent>
                                            <div>
                                                <div className="center-align">
                                                    <img
                                                        height="120"
                                                        width="120"
                                                        className=""
                                                        src={`${process.env.PUBLIC_URL}/images/mission.svg`}
                                                        alt="Mission logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">mission</p>
                                                <p className="summary center-align">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <ScrollAnimation
                                    delay={500}
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <Card raised={true} elevation={1} variant="elevation">
                                        <CardContent>
                                            <div>
                                                <div className="center-align">
                                                    <img
                                                        height="120"
                                                        width="120"
                                                        className=""
                                                        src={`${process.env.PUBLIC_URL}/images/vision.svg`}
                                                        alt="Mission logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">vision</p>
                                                <p className="summary center-align">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section light-background">
                    <Container>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12}>
                                <p className="uppercase margin-vertical-large sub-header">We achieve our mission
                                    through</p>
                            </Grid>
                            <Grid item={true} xs={12} md={3}>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <Card raised={false} elevation={0} variant="elevation">
                                        <CardContent>
                                            <div>
                                                <div className="center-align">
                                                    <img
                                                        height="70"
                                                        width="70"
                                                        className=""
                                                        src={`${process.env.PUBLIC_URL}/images/happy.svg`}
                                                        alt="People logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">Our People</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>
                            <Grid item={true} xs={12} md={3}>
                                <ScrollAnimation
                                    delay={500}
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <Card raised={false} elevation={0} variant="elevation">
                                        <CardContent>
                                            <div>
                                                <div className="center-align">
                                                    <img
                                                        height="70"
                                                        width="70"
                                                        className=""
                                                        src={`${process.env.PUBLIC_URL}/images/behavior.svg`}
                                                        alt="Decision making logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">Our Conduct</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>
                            <Grid item={true} xs={12} md={3}>
                                <ScrollAnimation
                                    delay={1000}
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <Card raised={false} elevation={0} variant="elevation">
                                        <CardContent>
                                            <div>
                                                <div className="center-align">
                                                    <img
                                                        height="70"
                                                        width="70"
                                                        className=""
                                                        src={`${process.env.PUBLIC_URL}/images/policy.svg`}
                                                        alt="Policy logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">Our Policies</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>
                            <Grid item={true} xs={12} md={3}>
                                <ScrollAnimation
                                    delay={1500}
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <Card raised={false} elevation={0} variant="elevation">
                                        <CardContent>
                                            <div>
                                                <div className="center-align">
                                                    <img
                                                        height="70"
                                                        width="70"
                                                        className=""
                                                        src={`${process.env.PUBLIC_URL}/images/decision-making.svg`}
                                                        alt="Mission logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">Our Dedication</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section padding-vertical-huge">
                    <Container>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12}>
                                <p className="uppercase margin-vertical-large sub-header">core values</p>
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
                                                        src={`${process.env.PUBLIC_URL}/images/idea.svg`}
                                                        alt="Creativity logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">Creativity and
                                                    Innovation</p>
                                                <p className="summary center-align">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </CardContent>
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
                                                        src={`${process.env.PUBLIC_URL}/images/integrity.svg`}
                                                        alt="Integrity logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">Integrity</p>
                                                <p className="summary center-align">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </CardContent>
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
                                                        src={`${process.env.PUBLIC_URL}/images/healthcare.svg`}
                                                        alt="Healthcare logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">Life, Health and
                                                    Environment</p>
                                                <p className="summary center-align">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </CardContent>
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
                                                        src={`${process.env.PUBLIC_URL}/images/teamwork.svg`}
                                                        alt="Teamwork logo"/>
                                                </div>
                                                <p className="title center-align uppercase grey-text">Teamwork</p>
                                                <p className="summary center-align">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section light-background padding-vertical-big">
                    <Container>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12}>
                                <p className="uppercase margin-vertical-large sub-header">profile</p>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <p className="profile">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p className="profile">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}

export default AboutPage;
