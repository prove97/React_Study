import React, {useState} from 'react'

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

  return (
    <form onSubmit={handleSubmit} style = {styles.wrapper}>
        <label>
            이름 :
            <input type="text" value={name} onChange={handleChangeName} />
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
        <button type="submit">제출</button>
    </form>
  )
}

export default SignUp