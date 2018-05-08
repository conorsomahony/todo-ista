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
import Header from "grommet/components/Header";
import CheckboxSelected from 'grommet/components/icons/base/CheckboxSelected';
import Title from "grommet/components/Title";
import Box from "grommet/components/Box";
import Menu from "grommet/components/Menu";
import Actions from "grommet/components/icons/base/Actions";
import Anchor from "grommet/components/Anchor";

/**
 * Component for the Todoista App Header
 */
class TodoistaAppHeader extends Component
{
    /**
    * render
    */
    render() {
        return (
            <Header
                pad='medium'
                colorIndex='neutral-2'
                primary={true}
                appCentered={true}
                size="large">
                <CheckboxSelected/>&nbsp;
                <Title>
                    Todo-ista
                </Title>
                {this.getMenu()}
            </Header>
        );
    }

    getMenu() {
        if (this.props.deleteAll) {
            return (
                <Box flex={true} justify='end' direction='row' responsive={false}>
                    <Menu
                        icon={< Actions />}
                        dropAlign={{
                        "right": "right",
                        "top": "bottom"
                    }}>
                        <Anchor href='#' className='active' onClick={this.props.deleteAll}>
                            Delete all
                        </Anchor>
                    </Menu>
                </Box>
            );
        } else 
            return null;
        }
    }

export default TodoistaAppHeader;