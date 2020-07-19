import React from "react";
import {Card, CardContent, CardMedia, Container, Grid} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

import Slider from "react-slick";
import Layout from "../../components/layout/Layout";
import "../../App.css";
import "./Index.css";
import {makeStyles} from "@material-ui/styles";

function IndexPage() {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 30,
                paddingBottom: 30
            },
            card: {
                minHeight: 300
            },
            carousel: {
                height: '70%'
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <div className="header">
                <section className="header-content">
                    <img
                        height="300"
                        width="300"
                        className="logo animate-pop-in pull-up-margin"
                        src={`${process.env.PUBLIC_URL}/images/elite-logo.png`}
                        alt="Background Hero"/>
                    <h1 className="header-title animate-pop-in responsive-text">ELiTE</h1>
                    <p className="header-subtitle animate-pop-in responsive-text">
                        Emerging Leaders in Technology and Engineering
                    </p>
                </section>
                <section className="header-down-arrow">
                    <img src={`${process.env.PUBLIC_URL}/images/downarrow.png`} width="50" alt="Down Arrow"/>
                </section>
            </div>
            <section className="section">
                <Container>
                    <Grid container={true} spacing={3} justify="center">
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">Mission & Vision</p>
                        </Grid>
                        <Grid className={classes.card} item={true} xs={12} md={5} spacing={3}>
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
                                                    src={`${process.env.PUBLIC_URL}/images/mission.svg`}
                                                    alt="Mission logo"/>
                                            </div>
                                            <p className="title center-align uppercase grey-text">mission</p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item={true} xs={12} md={5}>
                            <ScrollAnimation
                                delay={500}
                                animateIn="fadeInUp" animateOnce={true} duration={2}>
                                <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/vision.svg`}
                                                    alt="Mission logo"/>
                                            </div>
                                            <p className="title center-align uppercase grey-text">vision</p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="section padding-vertical-huge margin-vertical-large light-background">
                <Container>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">services</p>
                        </Grid>

                        <Grid item={true} xs={12} md={6} lg={4}>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOnce={true}
                                duration={2}>
                                <Card className={classes.card} raised={true} elevation={4} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/mission.svg`}
                                                    alt="Mission logo"/>
                                            </div>
                                            <p className="title center-align uppercase grey-text">mission</p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>


                        <Grid item={true} xs={12} md={6} lg={4}>
                            <ScrollAnimation
                                delay={500}
                                animateIn="fadeInUp"
                                animateOnce={true}
                                duration={2}>
                                <Card className={classes.card} raised={true} elevation={4} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/vision.svg`}
                                                    alt="Mission logo"/>
                                            </div>
                                            <p className="title center-align uppercase grey-text">vision</p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>


                        <Grid item={true} xs={12} md={6} lg={4}>
                            <ScrollAnimation
                                delay={1000}
                                animateIn="fadeInUp"
                                animateOnce={true}
                                duration={2}>
                                <Card className={classes.card} raised={true} elevation={4} variant="elevation">
                                    <CardContent>
                                        <div>
                                            <div className="center-align">
                                                <img
                                                    height="70"
                                                    width="70"
                                                    className=""
                                                    src={`${process.env.PUBLIC_URL}/images/vision.svg`}
                                                    alt="Mission logo"/>
                                            </div>
                                            <p className="title center-align uppercase grey-text">vision</p>
                                            <p className="summary center-align">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>

                    </Grid>
                </Container>
            </section>

            <section className="padding-vertical-huge">
                <Container>
                    <p className="uppercase margin-vertical-large sub-header">Gallery</p>
                    <div className="carousel-size">
                        <Slider
                            autoplay={5000}
                            fade={true}
                            speed={2000}
                            dots={true}
                            arrows={false}
                            slidesToShow={1}
                            slidesToScroll={1}
                            infinite={true}>

                            <div className="slider-container">
                                <img
                                    className="responsive-image"
                                    src={`${process.env.PUBLIC_URL}/images/image-1.jpg`}
                                    alt="Mission logo"/>
                            </div>

                            <div className="slider-container">
                                <img
                                    className="responsive-image"
                                    src={`${process.env.PUBLIC_URL}/images/image-2.jpg`}
                                    alt="Mission logo"/>
                            </div>

                            <div className="slider-container">
                                <img
                                    className="responsive-image"
                                    src={`${process.env.PUBLIC_URL}/images/office-hq.jpg`}
                                    alt="Mission logo"/>
                            </div>
                            <div className="slider-container">
                                <img
                                    className="responsive-image"
                                    src={`${process.env.PUBLIC_URL}/images/image-1.jpg`}
                                    alt="Mission logo"/>
                            </div>

                            <div className="slider-container">
                                <img
                                    className="responsive-image"
                                    src={`${process.env.PUBLIC_URL}/images/image-2.jpg`}
                                    alt="Mission logo"/>
                            </div>

                            <div className="slider-container">
                                <img
                                    className="responsive-image"
                                    src={`${process.env.PUBLIC_URL}/images/office-hq.jpg`}
                                    alt="Mission logo"/>
                            </div>

                        </Slider>
                    </div>
                </Container>
            </section>

            <section className="padding-vertical-huge light-background">
                <Container>
                    <Grid container={true} spacing={2} justify="space-around">
                        <Grid item={true} xs={12}>
                            <p className="sub-header uppercase">Visit our offices</p>
                        </Grid>
                        <Grid item={true} xs={12} md={5}>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOnce={true}
                                duration={2}>
                                <Card elevation={4} raised={true} variant="elevation">
                                    <CardMedia component="img" src={`${process.env.PUBLIC_URL}/images/office-hq.jpg`}/>
                                    <CardContent>
                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/pin.svg`}
                                            /> <span className="location">New York City </span> <span
                                            className="separator"> | </span> <span
                                            className="branch"> Headquarters</span>
                                        </div>

                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/phone.svg`}
                                            /> <span className="contact">+233555180048319</span>
                                        </div>
                                        <div className="margin-bottom-small">
                                            <span className="landmark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>

                        <Grid item={true} xs={12} md={5}>
                            <ScrollAnimation
                                delay={500}
                                animateIn="fadeInUp"
                                animateOnce={true}
                                duration={2}>
                                <Card elevation={4} raised={true} variant="elevation">
                                    <CardMedia component="img"
                                               src={`${process.env.PUBLIC_URL}/images/office-branch.jpg`}/>
                                    <CardContent>
                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/pin.svg`}
                                            /> <span className="location">Ghana </span> <span
                                            className="separator"> | </span> <span
                                            className="branch"> Operations Office</span>
                                        </div>
                                        <div className="margin-bottom-small">
                                            <img
                                                width="15"
                                                height="15"
                                                className="icon"
                                                alt="Contact Icon"
                                                src={`${process.env.PUBLIC_URL}/images/phone.svg`}
                                            /> <span className="contact">+233555180048319</span>
                                        </div>
                                        <div className="margin-bottom-small">
                                            <span className="landmark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </span>
                                        </div>

                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>

                    </Grid>
                </Container>
            </section>

        </Layout>
    )
}

export default IndexPage;
