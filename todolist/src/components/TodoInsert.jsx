import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa6";
import styled from 'styled-components'


const InsertContainer = styled.div`
    width: 100%;
    padding-bottom: 24px;
    display: inline-flex;
    justify-content: center;
`
const InsertInput = styled.input`
    min-width: 250px;
    height: 40px;
    padding: 0px 24px;
    border: none;
    border-radius: 20px 0px 0px 20px;
    background-color: #dbdbdb;
    outline: none;
`

const InsertBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 0px 20px 20px 0px;
    cursor: pointer;
`

const TodoInsert = ({onInsert}) => {
    const [todoTitle, setTodoTitle] = useState("");

    const onChangeTitle = (ev) => {
        setTodoTitle(ev.target.value);
    }

    const onSubmit = (ev) => {
        onInsert(todoTitle);
        setTodoTitle(""); // value초기화
    }

    return (
        <InsertContainer>
            <InsertInput 
                type="text" 
                placeholder='입력하세요'
                onChange={onChangeTitle}
                value={todoTitle}
            />
            <InsertBtn onClick={onSubmit}>
                <FaPlus/>
            </InsertBtn>
        </InsertContainer>
    )
}

export default TodoInsert