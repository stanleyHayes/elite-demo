import React from "react";
import {
    Divider,
    Grid,
    Container, Avatar,
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import "../../App.css";

function DrawerContent({handleDrawerClose, currentUser}) {


    const useStyles = makeStyles(theme => {
        return {
            button: {
                textAlign: "center"
            },
            link: {
                color: "#777777",
                textDecoration: "none",
                fontFamily: 'Poppins'
            },
            avatar: {
                width: 150,
                height: 150,
            },
            avatarContainer: {
                display: "flex",
                justifyContent: "center",
                marginBottom: 32
            },
            gridContainer: {
                paddingTop: 32,
                paddingBottom: 32
            },
            root: {
                backgroundColor: "white",
                minHeight: "100vh",
                width: '90vw'
            },
            expandPanel: {
                backgroundColor: "white"
            },
            content: {
                paddingLeft: 32,
                paddingRight: 32
            },
            grid: {
                marginTop: 16
            },
            icon: {
                fontSize: 24
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid className={classes.grid} container={true} justify="flex-end" alignItems="center">
                    <Grid item={true} xs={1}>
                        <Close className={classes.icon} onClick={() => handleDrawerClose()}/>
                    </Grid>
                </Grid>
                <Grid
                    container={true}
                    justify="center"
                    alignItems="flex-start">
                    {
                        currentUser ? (
                            <Grid item={true}>
                                {(currentUser && currentUser.avatar) ? (
                                    <Avatar className={classes.avatar} src={currentUser.avatar}/>
                                ) : (
                                    <Avatar className={classes.avatar}>
                                        {currentUser && currentUser.name[0][0]}
                                    </Avatar>
                                )}
                                <p className="text-align-center">{currentUser && currentUser.name}</p>
                            </Grid>
                        ) : null
                    }
                </Grid>
                <Grid className={classes.gridContainer} container={true} justify="flex-start">
                    <Grid item={true} xs={12}>
                        <div className={classes.content}>
                            <p>
                                <Link to="/"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small`}>
                                    Home
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>
                            {
                                currentUser ? (
                                    <p>
                                        <Link
                                            className={`${classes.button}  ${classes.link} center-align margin-vertical-small`}
                                            to="/dashboard">
                                            Dashboard
                                        </Link>
                                    </p>
                                ) : null
                            }

                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/contact"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small`}>
                                    Contact
                                </Link>
                            </p>
                            <Divider variant="fullWidth"/>
                            <p>
                                <Link to="/about"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small`}>
                                    About
                                </Link>
                            </p>
                            <Divider variant="fullWidth"/>

                            {
                                currentUser ? (
                                    <div>
                                        <p>
                                            <Link to="/login"
                                                  className={`${classes.button}  ${classes.link} center-align margin-vertical-small`}>
                                                Logout
                                            </Link>
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <p>
                                            <Link to="/register"
                                                  className={`${classes.button}  ${classes.link} center-align margin-vertical-small`}>
                                                Register
                                            </Link>
                                        </p>
                                        <Divider variant="fullWidth"/>
                                        <p>
                                            <Link to="/login"
                                                  className={`${classes.button}  ${classes.link} center-align margin-vertical-small`}>
                                                Login
                                            </Link>
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        loading: state.auth.loading
    }
}


export default connect(mapStateToProps)(DrawerContent);
