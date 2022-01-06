import React, {Fragment} from 'react';
import { Container } from '@mui/material';
import './App.css';

//components

import EditTodo from './components/EditTodo';
import ListTodo from './components/ListTodo';
import InputTodo from './components/InputTodo';

function App() {
  return (
    <Fragment>
      <Container>
        <InputTodo/>
      </Container>
      <Container>
        <ListTodo/>
      </Container>
    </Fragment>
  );
}

export default App;
