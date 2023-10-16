import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000000;
  width: 70vw;
  padding: 16px;
  padding-top: 56px;
`

export const Heading = styled.h1`
  font-family: Roboto;
  color: #ffffff;
  font-size: 26px;
  font-weight: 400;
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const Li = styled.li`
  list-style: none;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const CustomBtn = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  color: #f1f5f9;
  font-family: Roboto;
  font-size: 12px;
  border: 1px solid ${props => (props.isActive ? 'transparent' : '#f3aa4e')};
  padding: 5px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 16px;
`

export const TasksUl = styled.ul`
  list-style-type: none;
  margin-top: 16px;
`

export const TasksLi = styled.li`
  background-color: #1a171d;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const ListItem = styled.p`
  color: #f1f5f9;
  font-family: Roboto;
`

export const CategoryContainer = styled.div`
  background-color: #f3aa4e;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 12px;
`

export const Category = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #475569;
  font-weight: 600;
`

export const EmptyViewContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EmptyViewContent = styled.h1`
  font-family: Roboto;
  color: #64748b;
`
