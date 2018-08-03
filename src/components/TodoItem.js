import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TYPE } from "../consts";
import styled from 'styled-components';



const Title = styled.input`
    font-size: 20px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-width: 2px;
    outline: none;
    width: 250px;
`;
const Description = styled.input`
    font-size: 16px;
    color: gray;
    border-top: none;
    border-right: none;
    border-left: none;
    border-width: 2px;
    outline: none;
    width: 250px;
`;

const Add = styled.button`
    margin: 10px 0 0 0;
    font-size: 14px;
    width: 100px;
    height: 20px;
    border-radius: 5px;
    background-color: aquamarine;
    border: none;
    cursor: pointer;
    outline:none;
`;
const Delete = styled.button`
    margin: 10px 0 0 0;
    font-size: 14px;
    width: 100px;
    height: 20px;
    border-radius: 5px;
    background-color: aquamarine;
    border: none;
    cursor: pointer;
    outline:none;
`;


class TodoItem extends Component {


    render() {
        const {
            title,
            description,
            addTodo,
            index,
            removeTodo,
            updateTodo
        } = this.props;

        const first = index === 0;

        return (
            <div>
                <Title defaultValue={title} onChange={(e)=>{
                    updateTodo({
                        index,
                        value: e.target.value,
                        field: 'title',
                    })
                }} />
                <br />
                <Description defaultValue={description}
                 onChange={(e)=>{
                     updateTodo({
                         index,
                         value: e.target.value,
                         field: 'description',
                     })
                 }} />
                <br/>
                {first ? (<Add onClick={addTodo}>Add</Add>) :
                    (<Delete onClick={() => removeTodo(index)}>Remove</Delete>)}
            </div>
        )
    }
}




function mapStateToProps(state, ownProps) {
    return {
        title: state.getIn(['todos', ownProps.index, 'index']),
        description: state.getIn(['todos', ownProps.index, 'description']),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateTodo: payload => dispatch({
            type: TYPE.UPDATE_TODO,
            payload,
        }),
        addTodo: payload => dispatch({
            type: TYPE.ADD_TODO,
            payload,
        }),
        removeTodo: payload => dispatch({
            type: TYPE.REMODE_TODO,
            payload,
        })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);