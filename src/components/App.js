import React, { Component } from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const Header = styled.h1``;
const List = styled.ul`
    list-style-type: none;
`;


class App extends Component {


  render() {

    const {todos} = this.props;

    return (
      <div>
        <Header>Planner</Header>
        {this._renderTodos(todos)}
      </div>
    );

  }
    _renderTodos(todos) {
        return (<List>
            <li>{todos.map((todo, index) => (
                <TodoItem key={todo.get('id')}
                          index={index}
                />))}</li>
        </List>)
    }
}

function mapStateToProps(state){
  return  {
    todos: state.get('todos'),
  }
}

export default connect(mapStateToProps)(App);
