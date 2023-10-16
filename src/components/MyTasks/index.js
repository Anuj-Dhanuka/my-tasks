import {Component} from 'react'

import Container from './styledComponent'

import TaskCreator from '../TaskCreator'
import TasksDisplay from '../TasksDisplay'

class MyTasks extends Component {
  state = {tasksList: [], providedCategory: ''}

  onAddingTask = item => {
    const {tasksList} = this.state
    const newTasksList = [...tasksList, item]
    this.setState({tasksList: newTasksList})
  }

  onClickCategory = displayText => {
    const {providedCategory} = this.state
    if (providedCategory === displayText) {
      this.setState({providedCategory: ''})
    } else {
      this.setState({providedCategory: displayText})
    }
  }

  render() {
    const {tagsList} = this.props
    const {tasksList, providedCategory} = this.state

    return (
      <Container>
        <TaskCreator tagsList={tagsList} onAddingTask={this.onAddingTask} />
        <TasksDisplay
          tagsList={tagsList}
          tasksList={tasksList}
          onClickCategory={this.onClickCategory}
          providedCategory={providedCategory}
        />
      </Container>
    )
  }
}

export default MyTasks
