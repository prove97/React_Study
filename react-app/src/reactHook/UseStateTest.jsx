import React, {useState} from 'react'

/*
    Hook이란
    함수형 컴포넌트에서 react state와 생명주기 메소드의 기능을 사용할 수 있게 해주는 함수이다
    hook은 class안에서는 동작하지 않는다. 대신 class없이 React를 사용할 수 있게 해준다.

    const [변수명, set변수명] = useState(초기값);
    변수명 : 원하는 state명 설정
    set변수명 : 해당변수 state의 값을 변경할 함수

    state : 컴포넌트의 상태값을 말한다.
    useState: 컴포넌트의 상태를 생성하고 관리할 수 있게 해주는 react hook이다.

    컴포넌트는 state값이 변경되면 이를 확인하고 요소를 리랜더링 해준다. props
*/
 const UseStateTest = () => {
    // let num = 0;
    const [num, setNum] = useState(0);

    

    const onClick1 = () =>{
        setNum(num + 1); // 0 -> 1
        console.log("onClick : " + num); // 1이 나와야하지만 0이 나옴, 함수가 끝나기 전에는 수정되지 않은 DOM을 계속 추적하기 때문에 리랜더링 된 DOM의 값이 뜨지 않음
    }

    const onClick2 = () =>{
        setNum(num - 1);
        console.log("onClick : " + num);
    }

    return (
        <div>
            <span>COUNT : {num}</span>
            <div>
                <button onClick={onClick1}>+</button>
                <button onClick={onClick2}>-</button>
            </div>
        </div>
    )
}

export default UseStateTest

// react는 state와 props만 추적