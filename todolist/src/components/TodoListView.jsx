import React from 'react'
import styled from 'styled-components'
import { FaRectangleXmark } from "react-icons/fa6";


const ListContainer = styled.ul`
    width: 100%;
    margin: 12px 0px;
    padding: 0px 30px;
`

const TodoRow = styled.li`
    height: 35px;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 5px;
    cursor: pointer;
`

const DoneRow = styled(TodoRow)`
    text-decoration: line-through;
`

const RemoveBtn = styled.button`
    cursor: pointer;
    width: 34px;
    height: 34px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    background-color: green;
    border: none;
`

const TodoListView = ({todos, onRemove, onToggle}) => {

    return (
        <ListContainer>{
            todos.map(todo => 
                todo.isDone ? 
                <DoneRow 
                    key={todo.id}
                    onClick={() => onToggle(todo.id)}
                >
                    {todo.title}
                    <RemoveBtn
                        onClick={(ev) => {
                            ev.stopPropagation() //이벤트 확산방지
                            // ev.preventDefault() //고유동작 방지
                            onRemove(todo.id)
                        }}>
                        <FaRectangleXmark />
                    </RemoveBtn>
                </DoneRow> :
                <TodoRow 
                    key={todo.id}
                    onClick={() => onToggle(todo.id)}
                >
                    {todo.title}
                    <RemoveBtn
                        onClick={(ev) => {
                                        ev.stopPropagation() //이벤트 확산방지
                                        // ev.preventDefault() //고유동작 방지
                                        onRemove(todo.id)
                                    }
                                }>
                        <FaRectangleXmark />
                    </RemoveBtn>
                </TodoRow>)
            }
            
        </ListContainer>

    )
}

export default TodoListView