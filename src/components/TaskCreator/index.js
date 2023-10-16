import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import {
  Container,
  Heading,
  FormEl,
  Label,
  Input,
  Select,
  CustomBtn,
} from './styledComponent'

class TaskCreator extends Component {
  state = {task: '', category: 'Health'}

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeCategory = event => {
    this.setState({category: event.target.value})
  }

  onSubmitForm = event => {
    const {task, category} = this.state
    const {onAddingTask} = this.props
    if (task.length > 0) {
      event.preventDefault()
      const uniqueId = uuid()
      const taskItem = {uniqueId, task, category}
      onAddingTask(taskItem)
      this.setState({task: '', category: 'Health'})
    }
  }

  render() {
    const {tagsList} = this.props
    const {task, category} = this.state
    return (
      <Container>
        <FormEl onSubmit={this.onSubmitForm}>
          <Heading>Create a task!</Heading>
          <Label htmlFor="Task">Task</Label>
          <Input
            type="text"
            placeholder="Enter the task here"
            value={task}
            id="Task"
            onChange={this.onChangeTask}
          />

          <Label htmlFor="optionsInput">Task</Label>
          <Select
            id="optionsInput"
            value={category}
            onChange={this.onChangeCategory}
          >
            {tagsList.map(eachItem => (
              <option value={eachItem.displayText} key={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </Select>

          <CustomBtn type="submit">Add Task</CustomBtn>
        </FormEl>
      </Container>
    )
  }
}

export default TaskCreator
