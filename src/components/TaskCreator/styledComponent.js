import styled from 'styled-components'

export const Container = styled.div`
  width: 30vw;
  background-color: #131213;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
`
export const Heading = styled.h1`
  font-family: Roboto;
  color: #f3aa4e;
  font-weight: 400;
  font-size: 36px;
  margin-bottom: 36px;
  align-self: center;
`
export const FormEl = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5vh;
  padding-bottom: 24px;
  margin-top: 0px;
  padding-top: 0;
`

export const Label = styled.label`
  font-family: Roboto;
  color: #f1f5f9;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  outline: none;
  font-family: Roboto;
  color: #64748b;
  margin-bottom: 10px;
  outline: none;
`

export const Select = styled.select`
  width: 90%;
  padding: 10px;
  outline: none;
  font-family: Roboto;
  color: #64748b;
  margin-bottom: 16px;
`

export const CustomBtn = styled.button`
  background-color: #f3aa4e;
  color: #f1f5f9;
  font-family: Roboto;
  font-size: 12px;
  height: 35px;
  width: 100px;
  border-radius: 5px;
  align-self: center;
`
