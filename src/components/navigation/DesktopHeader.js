import React, {Fragment} from "react";
import {Grid, Toolbar, Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ExitToApp} from "@material-ui/icons";

import "../../App.css";


function DesktopHeader({currentUser, loading}) {

    const useStyles = makeStyles(theme => {
        return {
            logo: {
                height: 50
            },
            logoContainer: {
                textAlign: "center"
            },
            owner: {
                fontWeight: 900
            },
            icon: {
                color: "#777777"
            }
        }
    })

    const classes = useStyles();

    return (
        <Toolbar variant="regular">
            <Grid container={true} justify="center" alignItems="center">

                <Grid item={true} lg={2} container={true}>
                    <Grid item={true}>
                        <Link to="/">
                            <img
                                height="100"
                                width="50"
                                className={`${classes.logo} brand-name`}
                                src={`${process.env.PUBLIC_URL}/images/elite-logo.png`}
                                alt="ELiTE logo"
                            />
                        </Link>
                    </Grid>
                </Grid>

                <Grid item={true} container={true} lg={6} justify="center" spacing={3}>
                    <Grid item={true}>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </Grid>

                    {
                        currentUser ? (
                            <Grid item={true}>
                                <Link to="/dashboard" className="nav-link">
                                    Dashboard
                                </Link>
                            </Grid>
                        ) : null
                    }

                    <Grid item={true}>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </Grid>

                    {
                        (!currentUser) ? (
                            <Fragment>
                                <Grid item={true}>
                                    <Link to="/register" className="nav-link">
                                        Register
                                    </Link>
                                </Grid>

                                <Grid item={true}>
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </Grid>
                            </Fragment>
                        ) : null
                    }
                </Grid>
                {
                    currentUser ? (
                        <Grid item={true} lg={1} container={true} spacing={3} justify="space-around" alignItems="center">
                            {(currentUser && currentUser.avatar) ? (
                                <Avatar src={currentUser.avatar}/>
                            ) : (
                                <Avatar>
                                    {currentUser && currentUser.name[0][0]}
                                </Avatar>
                            )}
                            <ExitToApp className={classes.icon}/>
                        </Grid>
                    ) : null
                }
            </Grid>
        </Toolbar>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps)(DesktopHeader);
