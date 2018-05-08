/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs: see MyReferences.md
 */

// React Components
import React, {Component} from "react";

// My Components
import MyTodoList from "./MyTodoList";
import MyTodoForm from "./MyTodoForm";
import TodoistaAppHeader from "./TodoistaAppHeader";
import TodoistaAppFooter from "./TodoistaAppFooter";

// Grommet Components
import App from "grommet/components/App";
import Box from "grommet/components/Box";
import Title from "grommet/components/Title";
import CheckBox from "grommet/components/CheckBox";

/**
 * Todoista App top-level component.
 */
class TodoistaApp extends Component {

  // React application state
  state = {
    myListItems: {},
    sort: false
  };

  /**
   * Lifecycle method - store items in localStorage when state is updated.
   */
  componentDidUpdate() {
    console.log(" (Store state to Local Storage)");
    localStorage.setItem('myListItems', JSON.stringify(this.state.myListItems));
    localStorage.setItem('sort', this.state.sort);
  }

  /**
   * Lifecycle method -restore items from localStorage when mounting.
   */
  componentDidMount() {
    console.log(" (Restore state from Local Storage)");
    const localStorageRef = localStorage.getItem('myListItems');
    if (localStorageRef) {
      this.setState({
        myListItems: JSON.parse(localStorageRef)
      });
    }
    const sortValue = localStorage.getItem('sort');
    if (sortValue) {
      this.setState({
        sort: JSON.parse(sortValue)
      })
    }
  }

  /**
  * Update App state to add a new list item
  */
  addListItem = (listItem) => {
    console.log("Adding a list item");
    // 1. take copy of existing state (ES6 copy syntax)
    const listItems = {
      ...this.state.myListItems
    };
    // 2. Add new list item
    listItems[`listItem${Date.now()}`] = listItem;
    // 3. set the new state
    this.setState({myListItems: listItems});
  }

  /**
   * Update App state to delete a list item
   */
  removeListItem = (key) => {
    console.log("Remove a list item");
    // 1. take copy of state
    const listItems = {
      ...this.state.myListItems
    };
    // 2. delete the item (Note, won't work for firebase)
    delete listItems[key];
    // 3. update state
    this.setState({myListItems: listItems});
  }

  /*
  * Update App state to toggle done state of an item
  */
  toggleDone = (key) => {
    console.log("Toggle list item done");
    // 1. take a copy of state (ES6 copy syntax)
    const myListItems = {
      ...this.state.myListItems
    };
    // 2. toggle done state
    myListItems[key].done = !myListItems[key].done;
    // 3. set the new state
    this.setState({myListItems});
  }

  /**
   * Delete all list items.
   */
  deleteAll = () => {
    console.log("Delete all items");
    this.setState({myListItems: {}});
  }

  /**
   * Toggle sort
   */
  toggleSort = () => {
    console.log("Toggle sorting");
    const sortValue = this.state.sort;
    this.setState({
      sort: !sortValue
    })
  }

  /**
   * render method - layout of main Todoista App
   */
  render() {
    return (
      <App centered={false}>
        <Box full={true}>
          {/* App Header */}
          <TodoistaAppHeader deleteAll={this.deleteAll}/>

          <Box pad="medium" margin="medium">
            {/* Todo Form */}
            <MyTodoForm addListItem={this.addListItem}/>
          </Box>
          <Box flex='grow'>
            {/* Tooo List Container - flex='grow'  */}
            <Box
              direction="row"
              justify="between"
              wrap={false}
              responsive={false}
              pad="medium"
              margin="medium"
              colorIndex="neutral-4-a">
              <Title>Things To Do</Title>
              {/* Todo List Title */}
              <CheckBox
                toggle={true}
                label="Sort"
                onChange={this.toggleSort}
                checked={this.state.sort}/> {/* A toggle whether or not to sort the list */}
            </Box>
            <Box pad="medium">
              {/* Todo List */}
              <MyTodoList
                listItems={this.state.myListItems}
                toggleDone={this.toggleDone}
                removeListItem={this.removeListItem}
                sortList={this.state.sort}/>
            </Box>
          </Box>
          {/* Main App Footer */}
          <TodoistaAppFooter/>
        </Box>
      </App>
    );
  }
}

export default TodoistaApp;
