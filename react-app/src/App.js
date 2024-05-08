import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.jsx';
// import Comment from './components/Comment.jsx';
// import CommentList from './components/CommentList.jsx';
// import Comment from './classComponent/Comment.jsx';
// import CommentList from './classComponent/CommentList.jsx';
// import UseStateTest from './reactHook/UseStateTest.jsx';
// import SignUp from './sample/SignUp.jsx'
// import LandingPage from './sample/LandingPage'
// import UseEffectTest from './reactHook/UseEffectTest.jsx';
// import UseMemoTest from './reactHook/useMemo/UseMemoTest.jsx';
// import UseCallbackTest from './reactHook/useCallback/UseCallbackTest.jsx';
// import UseRefTest from './reactHook/UseRefTest.jsx';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from'./pages/Home';
import FoodMenu from'./pages/FoodMenu';

/**
 * react-router-dom
 * react로 생성된 SPA 내부에서 페이지 이동이 가능하도록 만들어주는 라이브러리
 * 
 * BrowserRouter(Router)
 * history API를 이용해서 history객체를 생성한다.
 * 라우팅을 진행할 컴포넌트 상위에 Router 컴포넌트를 생성하고 감싸주어야한다.
 * 
 * Routes
 * 모든 Route의 상위경로에 존재해야하며, location 변경시 하위에 있는 모든 Route중에서
 * 현재 location과 맞는 Route를 찾아준다.
 * 
 * Route
 * 현재 브라우저의 location(window.href.location)정보를 가져온다. 
 * => 상태에 따라서 다른 element를 렌더링 한다.
 */

function App() {
  return (
    <Router>
      <div className="App">  
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/food">FoodList</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/food' element={<FoodMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
