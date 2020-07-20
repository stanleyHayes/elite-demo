import React from "react";
import {CardActions, Button, Divider, CardContent, Card, Avatar, Grid} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

function Instructor({instructor}) {

    const useStyles = makeStyles(theme => {
        return {
            card: {
                minHeight: 200
            },
            button: {
                fontFamily: 'Poppins'
            },
            icon: {
                color: "darkblue"
            },
            avatar: {
                width: 150,
                height: 150
            }
        }
    })

    console.log(instructor);

    const classes = useStyles();

    const {_id, avatar, name, school, profile, major} = instructor;
    return (
        <Card elevation={1} raised={true} variant="elevation">
            <CardContent>
                <div>
                    <Grid container={true} justify="center">
                        <Grid item={true}>
                            <Avatar className={classes.avatar} src={avatar}/>
                        </Grid>
                    </Grid>
                    <p className="text font-size-medium text-align-center">{name}</p>
                    <p className="font-size-small text text-align-center">{major}</p>
                    <p className="font-size-medium text text-align-center">{school}</p>
                    <p className="font-size-small text text-align-center">{profile}</p>
                </div>
            </CardContent>
            <Divider variant="fullWidth"/>
            <CardActions>
                <Button
                    className={classes.button}
                    size="large"
                    variant="text"
                    fullWidth={true}
                    endIcon={<ArrowForward className={classes.icon}/>}>
                    <Link to={`/instructors/${_id}`} className="nav-link">
                        View Instructor Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Instructor;
