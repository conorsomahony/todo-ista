/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs: see MyReferences.md
 */

// React Components
import React, {Component} from "react";

// Grommet Components
import Button from "grommet/components/Button";
import Box from "grommet/components/Box";
import Checkbox from "grommet/components/icons/base/Checkbox"
import CheckboxSelected from "grommet/components/icons/base/CheckboxSelected"
import Trash from "grommet/components/icons/base/Trash";
import ListItem from 'grommet/components/ListItem';
import Flag from "grommet/components/icons/base/Flag"

/**
 * My Todo Item Component
 */
class MyTodoItem extends Component {

    /**
     * Toggle whether item is done or not when it is clicked.
     */
    handleClick = () => {
        this
            .props
            .toggleDone(this.props.index);
    }
    /**
     * render the todo item
     */
    render() {
        if (this.props.todoItem) {
            // ES6 "destructuring"
            const {todoTitle, priority, done} = this.props.todoItem;
            return (
                <ListItem>
                    <Box
                        flex="grow"
                        direction='row'
                        justify='start'
                        align='center'
                        wrap={false}
                        responsive={false}>
                        <Box>
                            {/* Button to mark Todo done or not done */}
                            <Button
                                critical={true}
                                icon={getTodoIcon(done)}
                                onClick={() => this.props.toggleDone(this.props.index)}/>
                        </Box>
                        <Box
                            flex="grow"
                            direction="row"
                            justify='start'
                            align='center'
                            wrap={false}
                            responsive={false}>
                            {/* Todo Text and Priority Icon */}
                            <span
                                className={done
                                ? "doneItem"
                                : ""}>{todoTitle}</span>
                            &nbsp;&nbsp;{getPriorityIcon(done, priority)}
                        </Box>
                        <Box>
                            {/* Delete Button */}
                            <Button
                                icon={< Trash />}
                                onClick={() => this.props.removeListItem(this.props.index)}/>
                        </Box>
                    </Box>
                </ListItem>
            )
        } else {
            return null;
        }
    }
}
function getTodoIcon(done) {
    return (!done
        ? <Checkbox/>
        : <CheckboxSelected/>);
}

/*
* Helper function: Return colored flag based on done state and priority.
*/
function getPriorityIcon(done, priority) {
    if (done) {
        return <Flag colorIndex="unknown"/>
    } else {
        switch (priority) {
            case 1:
                return <Flag colorIndex="critical"/>
            case 2:
                return <Flag colorIndex="warning"/>
            case 3:
                return <Flag colorIndex="ok"/>
            default:
                return <Flag/>
        }
    }
}

export default MyTodoItem;
