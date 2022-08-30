import { Form, Field } from 'formik';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  background-color: blue;
`;
export const FormSearch = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputSearch = styled(Field)`
  height: 30px;
  width: 200px;
  outline: none;
  border: none;
`;
export const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: none;
`;
