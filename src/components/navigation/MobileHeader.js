import React from "react";
import {Toolbar, Grid} from "@material-ui/core";
import { Menu} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

function MobileHeader({handleDrawerToggle}) {

    const handleClick = () => {
        handleDrawerToggle(true)
    }

    const useStyles = makeStyles(theme => {
        return {
            icon: {
                color: "orange"
            },
            toolbar: {
                padding: 4
            }
        }
    })

    const classes = useStyles();

    return (
        <Toolbar variant="regular" className={classes.toolbar}>

            <Grid
                container={true}
                alignItems="center"
                justify="space-around">

                <Grid
                    spacing={2}
                    xs={10}
                    container={true}
                    justify="flex-start"
                    item={true}>
                    <Grid item={true}>
                        <Link to="/">
                            <img
                                height="50"
                                width="50"
                                className={`${classes.logo} brand-name`}
                                src={`${process.env.PUBLIC_URL}/images/elite-logo.png`}
                                alt="ELiTE logo"
                            />
                        </Link>
                    </Grid>
                </Grid>

                <Grid item={true} xs={1}>
                    <Menu className={classes.icon} onClick={handleClick}/>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;
