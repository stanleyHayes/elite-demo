import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Card, CardContent, TextField, Avatar, Button} from "@material-ui/core";
import "../../App.css";
import {makeStyles} from "@material-ui/styles";
import validator from "validator";

function SignInPage() {

    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const {email, password} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }


    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError({...error, email: "Email Field required"});
            return;
        } else {
            setError({...error, email: null});
        }

        if (!validator.isEmail(email)) {
            setError({...error, email: "Enter a valid email address"});
            return;
        } else {
            setError({...error, email: null});
        }

        if (!password) {
            setError({...error, password: "Password Field required"});
            return;
        } else {
            setError({...error, password: null});
        }
    }

    const useStyles = makeStyles(theme => {
        return {
            logo: {
                width: 120,
                height: 120
            },
            button: {
                paddingTop: 16,
                paddingBottom: 16,
                borderRadius: 4,
                backgroundColor: "black",
                fontFamily: 'Poppins',
                color: "white"
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <div className="center-item padding-vertical-huge">
                <Container>
                    <Card elevation={1} variant={"elevation"} raised={true}>
                        <CardContent>
                            <Grid container={true} justify="space-around">
                                <Grid item={true} xs={12} md={4} lg={4}>
                                    <div className="center-vertical">
                                        <div className="center-horizontal">
                                            <Avatar className={classes.logo}
                                                    src={`${process.env.PUBLIC_URL}/images/elite-logo.png`}/>
                                        </div>
                                        <p className="text-align-center title margin-bottom-medium">ELiTE</p>
                                        <p className="text-align-center font-size-small margin-bottom-medium">
                                            Emerging Leaders in Technology and Engineering
                                        </p>
                                        <p className="text-align-center font-size-medium margin-bottom-medium">Sign
                                            In</p>
                                        <p className="font-size-medium text-align-center margin-bottom-medium">Lorem
                                            ipsum
                                            dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </p>
                                    </div>
                                </Grid>
                                <Grid item={true} xs={12} md={4} lg={4}>
                                    <div className="center-vertical">

                                        <div className="margin-bottom-medium">
                                            <p className="font-style-italic font-weight-bold blue-text uppercase font-size-medium text-align-center margin-bottom-medium">
                                                Welcome Back
                                            </p>
                                        </div>

                                        <div className="margin-bottom-medium">
                                            <p className="caption margin-bottom-small">Email</p>
                                            <TextField
                                                margin="dense"
                                                placeholder="Email"
                                                label="Email"
                                                variant="outlined"
                                                fullWidth={true}
                                                helperText={error.email}
                                                value={email}
                                                error={Boolean(error.email)}
                                                name="name"
                                                type="text"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="margin-bottom-medium">
                                            <p className="caption margin-bottom-small">Password</p>
                                            <TextField
                                                margin="dense"
                                                placeholder="Password"
                                                label="Password"
                                                variant="outlined"
                                                fullWidth={true}
                                                helperText={error.password}
                                                value={password}
                                                error={Boolean(error.password)}
                                                name="password"
                                                type="password"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="margin-bottom-medium">
                                            <Button
                                                onChange={handleSubmit}
                                                onSubmit={handleSubmit}
                                                fullWidth={true}
                                                className={classes.button}
                                                variant="outlined"
                                                size="large">
                                                Login
                                            </Button>
                                        </div>

                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </Layout>
    )
}

export default SignInPage;
