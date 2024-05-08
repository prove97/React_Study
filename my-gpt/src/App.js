import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {Title, DescriptText} from './components/CommonStyles';
import SearchBar from './components/SearchBar';
import { CallGpt } from './service/gpt';

function App() {
  const [searchText, setSearchText] = useState('');
  const handleChangeSerarchText = (ev) => {
    setSearchText(ev.target.value);
  }

  const handleClickSearchIcon = () => {
    CallGpt({
      prompt : searchText
    })
  }

  return (
    <AppContainer>
      <Header>
        <Title>나만의 GPT</Title>
      </Header>
      <Contents>
        
      </Contents>
      <Footer>
        <SearchBar 
          searchText = {searchText}
          onChangeSerachText = {handleChangeSerarchText}
          onClickSearchIcon = {handleClickSearchIcon}
        />
        <DescriptText>
          ChatGPT can make mistakes. Consider checking important information.
        </DescriptText>
      </Footer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`

const Header = styled.div`
  padding: 8px;
  height: 56px;
  width:  100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background: white;
  opacity: 0.6;
`

const Contents = styled.div`
  padding: 60px 0 0 0;
  flex: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`

const Footer = styled.div`
  height: 86px;
  display: flex;
  flex-direction: column;
`



