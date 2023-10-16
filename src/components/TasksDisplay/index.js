import {
  Container,
  Heading,
  Ul,
  Li,
  CustomBtn,
  TasksUl,
  TasksLi,
  ListItem,
  CategoryContainer,
  Category,
  EmptyViewContainer,
  EmptyViewContent,
} from './styledComponent'

const TasksDisplay = props => {
  const {tagsList, tasksList, providedCategory, onClickCategory} = props
  let filteredTaskList = tasksList
  if (providedCategory !== '') {
    filteredTaskList = tasksList.filter(
      eachItem => eachItem.category === providedCategory,
    )
  }

  const isEmpty = tasksList.length === 0

  return (
    <Container>
      <Heading>Tags</Heading>
      <Ul>
        {tagsList.map(eachItem => {
          const onClickBtn = () => {
            onClickCategory(eachItem.displayText)
          }
          const isActive = providedCategory === eachItem.displayText
          return (
            <Li key={eachItem.optionId}>
              <CustomBtn type="button" onClick={onClickBtn} isActive={isActive}>
                {eachItem.displayText}
              </CustomBtn>
            </Li>
          )
        })}
      </Ul>
      <Heading>Tasks</Heading>
      {isEmpty && (
        <EmptyViewContainer>
          <EmptyViewContent>No Tasks Added Yet</EmptyViewContent>
        </EmptyViewContainer>
      )}
      {!isEmpty && (
        <TasksUl>
          {filteredTaskList.map(eachItem => (
            <TasksLi key={eachItem.uniqueId}>
              <ListItem>{eachItem.task}</ListItem>
              <CategoryContainer>
                <Category>{eachItem.category}</Category>
              </CategoryContainer>
            </TasksLi>
          ))}
        </TasksUl>
      )}
    </Container>
  )
}

export default TasksDisplay
