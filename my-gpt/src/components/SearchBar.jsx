import React from 'react'
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";


const SearchBar = ({searchText, onChangeSerachText, onClickSearchIcon}) => {
  return (
    <SearchBarContainer>
        <SearchInput 
            value={searchText}
            onChange={onChangeSerachText}
            type='text'
            placeholder='궁금한 것을 물어보세요..'

        />
        <UploadIconBox
            search={searchText}
            onClick={onClickSearchIcon}
        >
            <FaArrowUp style={{
                color: "white"
                
            }}/>
        </UploadIconBox>
    </SearchBarContainer>
  )
}

export default SearchBar

const SearchBarContainer = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    padding: 14px 48px 14px 16px;
    border-radius: 12px;
    height: 52px;
    max-width: calc(100% - 24px);
    margin: auto;
    position: relative;
`

const SearchInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
`

const UploadIconBox = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    background: ${(props) => props.search ? "black" : "#e5e5e5"};
    cursor: ${(props) => props.search ? "pointer" : "auto"};    
`
