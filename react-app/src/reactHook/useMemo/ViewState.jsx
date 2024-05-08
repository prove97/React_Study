import React, {useMemo} from 'react'

const getNumber = (num) => {
    console.log("숫자 변경. +1해서 보여줌");
    return num + 1;
}

const getText = (text) => {
    console.log("글자 변경");
    return text;
}

const ViewState = ({num, text}) => {
    // const viewNum = getNumber(num);
    // const viewText = getText(text);

    const viewNum = useMemo(() => getNumber(num), [num])
    const viewText = useMemo(() => getText(text), [text])

    return (
        <div>
            {viewText} <br />
            {viewNum}
        </div>
    )
}

export default ViewState