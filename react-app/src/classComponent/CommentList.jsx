import React, { Component } from 'react'
import Comment from './Comment.jsx'

const serverComments =  [
    {
        id:1,
        message:"안녕하세요"
    },{
        id:2,
        message:"저리가세요"
    },{
        id:3,
        message:"히잉"
    },
    
]

let timer;
/*
    class Component
    state(필드대체)를 가지고 있고 이를 수정할 수 있다.
    life cycle에 따른 생명주기메소드를 사용할 수 있다.
*/


export default class CommentList extends Component {
    constructor(props){
        super(props);
        //props =>

        this.state={
            commentList: []
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
        
        const {commentList} = this.state; //비구조할당
        // const commentList = this.state.commentList; 위의 코드와 같은 뜻

        //setInterval : 일정시간마다 특정 함수를 반복해서 실행
        timer = setInterval(() => {
            //2초마다 실행되는 부분
            if(commentList.length < serverComments.length){
                const index = commentList.length; //0 1
                commentList.push(serverComments[index]);

                this.setState({
                    ...commentList
                })
            } else{
                this.setState({
                    commentList:[]
                })

                clearInterval(timer)
            }

        }, 2000);
    }
    
    render() {
    
        return (
      <div>
        {
            serverComments.map(c => {
                return(
                    <Comment
                        key={c.id}
                        id={c.id}
                        message={c.message}
                    />
                )
            })
        }
      </div>
    )
  }
}

//클린코드 반례(외부코드에 영향을 줌)
// const add(data){
//     const sum = data.a + data.b
//     data.a = 7
//     return sum;
// }

// let t = {
//     a: 5,
//     b: 3
// }

// result = add(t)

//t
