import React, {useState, useRef} from 'react'

//제출버튼을 클릭시 alert를 이용하여 이름과 성별을 보여주는 팝업을 나타내시오.
const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }
}

const SignUp = () => {
    const [name, setName] =  useState("");
    const [gender, setGender] =  useState("남자");

    const nameInput = useRef();

    const handleChangeName = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    }

    const handleChangeGender= (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        event.preventDefault(); // == return false;
    }
    
    const handleReset = () => {
        setName("");
        setGender("남자");
        nameInput.current.focus();
    }

  return (
    <form onSubmit={handleSubmit} style = {styles.wrapper}>
        <label>
            이름 :
            <input 
                type="text" 
                value={name} 
                onChange={handleChangeName} 
                ref={nameInput}
            />
        </label>
        <br />
        <label>
            성별 :
            <select value={gender} onChange={handleChangeGender}>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
            </select> 
        </label>
        <br />
        <div>
            <button type="submit">제출</button>
            <button type="button" onClick={handleReset}>초기화</button>
        </div>
    </form>
  )
}

export default SignUp