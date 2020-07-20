import React from "react";
import {CardActions, Button, Divider, CardContent, Card, CardHeader, Avatar} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

function Schedule({schedule}) {

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

    const {_id, date, course, room, instructor} = schedule;
    return (
        <Card elevation={1} raised={true} variant="elevation">
            <CardHeader
                title={instructor.name}
                subheader="Instructor"
                avatar={<Avatar src={instructor.avatar} /> } />
            <CardContent>
                <div className="center-horizontal">
                    <p className="text font-size-medium">{course.name}</p>
                    <p className="font-size-medium grey-text-light">{room}</p>
                    <p className="font-size-small">{new Date(date).toDateString()}</p>
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
                    <Link to={`/schedules/${_id}`} className="nav-link">
                        View Schedule Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Schedule;
