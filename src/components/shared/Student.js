import React from "react";
import {CardActions, Button, Divider, CardContent, Card, Avatar} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

function Student({student}) {

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

    const classes = useStyles();

    const {_id, avatar, name, school, profile} = student;
    return (
        <Card elevation={1} raised={true} variant="elevation">
            <CardContent>
                <div className="center-horizontal">
                    <div>
                        <Avatar className={classes.avatar} src={avatar} />
                    </div>
                    <p className="text font-size-medium">{name}</p>
                    <p className="font-size-medium grey-text-light">{school}</p>
                    <p className="font-size-small">{profile}</p>
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
                    <Link to={`/students/${_id}`} className="nav-link">
                        View Student Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Student;
