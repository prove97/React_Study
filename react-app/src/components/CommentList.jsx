import React from 'react'
import Comment from './Comment.jsx'

const comments = [{
    id: 1,
    name: '홍길동',
    comment: '안녕하세여',
    path: "https://i.namu.wiki/i/vrrxAFOllLfXJv81KRPgEGzr4zZEdOvqDbV8g7pvrKEW74ffiCt6jquf1oEvwTM3z_4lI0om7iQuzdAELZ8Qlg.webp"

},{
    id: 2,
    name: '김길동',
    comment: '안녕하세여2',
    path: "https://i.namu.wiki/i/vrrxAFOllLfXJv81KRPgEGzr4zZEdOvqDbV8g7pvrKEW74ffiCt6jquf1oEvwTM3z_4lI0om7iQuzdAELZ8Qlg.webp"
},{
    id: 3,
    name: '최길동',
    comment: '안녕하세여3',
    path: "https://i.namu.wiki/i/vrrxAFOllLfXJv81KRPgEGzr4zZEdOvqDbV8g7pvrKEW74ffiCt6jquf1oEvwTM3z_4lI0om7iQuzdAELZ8Qlg.webp"
}]
// => 

const CommentList = () => {
  return (
    <div>
        {comments.map(comment => {
            return <Comment key={comment.id} name={comment.name} comment={comment.comment} path={comment.path}/>
        })}
    </div>
  )
}

export default CommentList