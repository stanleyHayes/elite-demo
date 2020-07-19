import React, {useState} from "react";
import {Container, Grid, Card, CardContent, TextField, Button, CardMedia} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "../../components/layout/Layout";
import {makeStyles} from "@material-ui/styles";
import "../../App.css";

function ContactPage() {
    const useStyles = makeStyles(theme => {
        return {
            card: {
                minHeight: 300
            },
            button: {
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16,
                backgroundColor: "black",
                color: "white"
            },

        }
    })

    const classes = useStyles();

    const [contact, setContact] = useState({});
    const [error, setError] = useState({});

    function handleMessageChange(event) {
        setContact({...contact, [event.target.name]: event.target.value});
    }

    const {name, email, subject, message, phone} = contact;

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) {
            setError({...error, name: "Name required"});
            return;
        } else {
            setError({...error, name: null});
        }

        if (!email) {
            setError({...error, email: "Email required"});
            return;
        } else {
            setError({...error, email: null});
        }

        if (!subject) {
            setError({...error, subject: "Subject required"});
            return;
        } else {
            setError({...error, subject: null});
        }

        if (!message) {
            setError({...error, message: "Message required"});
            return;
        } else {
            setError({...error, message: null});
        }
    }

    return (
        <Layout>
            <div>
                <section className="light-background padding-vertical-huge">
                    <Container>
                        <Grid container={true} justify="center">
                            <Grid item={true} xs={12}>
                                <p className="sub-header uppercase center-align">Follow us on social media</p>
                            </Grid>
                            <Grid item={true} xs={2} md={1}>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <a href="https://" target="_blank" rel="noreferrer noopener">
                                        <img width={50} height={50}
                                             src={`${process.env.PUBLIC_URL}/images/linkedin.svg`}
                                             alt="Linkedin logo"/>
                                    </a>
                                </ScrollAnimation>

                            </Grid>
                            <Grid item={true} xs={2} md={1}>
                                <ScrollAnimation
                                    delay={500}
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <a href="https://" target="_blank" rel="noreferrer noopener">
                                        <img width={50} height={50}
                                             src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                                             alt="Facebook logo"/>
                                    </a>
                                </ScrollAnimation>
                            </Grid>
                            <Grid item={true} xs={2} md={1}>
                                <ScrollAnimation
                                    delay={1000}
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <a href="https://" target="_blank" rel="noreferrer noopener">
                                        <img width={50} height={50} src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                                             alt="Twitter logo"/>
                                    </a>
                                </ScrollAnimation>
                            </Grid>
                            <Grid item={true} xs={2} md={1}>
                                <ScrollAnimation
                                    delay={1200}
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <a href="https://" target="_blank" rel="noreferrer noopener">
                                        <img width={50} height={50}
                                             src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                                             alt="Instagram logo"/>
                                    </a>
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                <section className="padding-vertical-huge">
                    <Container>
                        <Grid container={true} spacing={2} justify="space-around">
                            <Grid item={true} xs={12}>
                                <p className="sub-header uppercase center-align">Visit our offices</p>
                            </Grid>
                            <Grid item={true} xs={12} md={5}>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOnce={true}
                                    duration={2}>
                                    <Card elevation={1} raised={true} variant="elevation">
                                        <CardMedia component="img"
                                                   src={`${process.env.PUBLIC_URL}/images/office-hq.jpg`}/>
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
                                                <span className="landmark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</span>
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
                                    <Card elevation={1} raised={true} variant="elevation">
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
                                                <span className="landmark">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                                </span>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>

                        </Grid>
                    </Container>
                </section>

                <section className="light-background padding-vertical-huge">
                    <Container>
                        <Grid container={true} spacing={2} justify="center">
                            <Grid item={true} xs={12}>
                                <p className="sub-header uppercase center-align">Send us a message</p>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <ScrollAnimation
                                    delay={1500}
                                    animateIn="zoomIn"
                                    animateOnce={true}
                                    duration={1}>
                                    <Card elevation={4} raised={true} variant={"elevation"}>
                                        <CardContent>
                                            <p>Send us a message</p>
                                            <TextField
                                                fullWidth={true}
                                                type="name"
                                                required={true}
                                                name="name"
                                                margin="dense"
                                                onChange={handleMessageChange}
                                                label="Name"
                                                error={Boolean(error.name)}
                                                helperText={error.name}
                                                value={name}
                                                variant="outlined"
                                            />

                                            <TextField
                                                fullWidth={true}
                                                type="email"
                                                required={true}
                                                name="email"
                                                margin="dense"
                                                onChange={handleMessageChange}
                                                label="Email"
                                                error={Boolean(error.email)}
                                                helperText={error.email}
                                                value={email}
                                                variant="outlined"
                                            />

                                            <TextField
                                                fullWidth={true}
                                                type="text"
                                                required={true}
                                                name="subject"
                                                margin="dense"
                                                onChange={handleMessageChange}
                                                label="Subject"
                                                error={Boolean(error.subject)}
                                                helperText={error.subject}
                                                value={subject}
                                                variant="outlined"
                                            />

                                            <TextField
                                                fullWidth={true}
                                                type="phone"
                                                name="phone"
                                                margin="dense"
                                                onChange={handleMessageChange}
                                                label="Phone"
                                                value={phone}
                                                variant="outlined"
                                            />

                                            <TextField
                                                fullWidth={true}
                                                type="text"
                                                required={true}
                                                name="message"
                                                margin="dense"
                                                onChange={handleMessageChange}
                                                label="Message"
                                                multiline={true}
                                                rows={5}
                                                error={Boolean(error.message)}
                                                helperText={error.message}
                                                value={message}
                                                variant="outlined"
                                            />

                                            <Button
                                                fullWidth={true}
                                                className={classes.button}
                                                onClick={handleSubmit}
                                                variant="outlined"
                                                size="large">
                                                Send Message
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}

export default ContactPage;
