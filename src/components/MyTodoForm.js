/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs: see MyReferences.md
 */

// React components
import React, {Component} from "react";

// Grommet components
import Button from "grommet/components/Button";
import Form from "grommet/components/Form";
import Add from "grommet/components/icons/base/Add";

/*
* My Todo Form Component
*/
class MyTodoForm extends Component {

  // Refs
  todoTitle = React.createRef();
  priority = React.createRef();

  /**
   * Process the TODO form, adding new todo item to the todo list.
   * (Note - No need to bind method to this, in a constructor, since we create a property handleClick,
   * set to an arrow function, which is bound.)
   */
  handleClick = (event) => {
    // 1. stop the form submitting
    event.preventDefault();
    // 2. create list item from form data
    const listItem = {
      todoTitle: this.todoTitle.current.value,
      priority: Number(this.priority.current.value),
      done: false
    }
    // 3. update the state via method passed down via props
    this
      .props
      .addListItem(listItem);
    // 4. reset the form
    event
      .currentTarget
      .reset();
  }

  /**
   * render method - form to create a TODO item
   */
  render() {
    return (
      <Form plain={true} onSubmit={this.handleClick}>
        <div className="wrapper">
          {/* Text Input for Todo Item */}
          <input
            type="text"
            ref={this.todoTitle}
            name="todoTitle"
            id="todoFormTextInput"
            required
            placeholder="Add New Todo"/> {/* Select the Priority */}
          <select ref={this.priority} name="priority">
            <option value="1">Priority 1</option>
            <option value="2">Priority 2</option>
            <option value="3">Priority 3</option>
          </select>
          {/* Submit Button */}
          <Button className="formButton" icon={< Add />} type='submit' secondary={true}/>
        </div>
      </Form>
    )
  }
}

export default MyTodoForm;