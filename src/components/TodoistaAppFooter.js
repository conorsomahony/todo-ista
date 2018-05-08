/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs: see MyReferences.md
 */

// React Components
import React from "react";

// Grommet Components
import Footer from "grommet/components/Footer";
import Paragraph from "grommet/components/Paragraph";
import Box from "grommet/components/Box";

/**
 * Component for the App Footer
 */
const TodoistaAppFooter = () => (
    <Footer
        primary={true}
        appCentered={true}
        direction="column"
        align="center"
        pad="small"
        colorIndex="grey-1">
        <Box
            direction='row'
            align='center'
            pad={{
            "between": "medium"
        }}>
            <Paragraph margin='none'>
                © 2018 Todo-ista
            </Paragraph>
        </Box>
    </Footer>
);

export default TodoistaAppFooter;