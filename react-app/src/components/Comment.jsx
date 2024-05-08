import React from 'react'

const styles = {
    nameText: {
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold'
    },
    commentText: {
        color: 'black',
        fontSize: 16
    },
    image:{
        width:50,
        height:50,
        borderRadius: 25
    },
    wrapper:{
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid grey',
        borderRadius: 16,
        margin: 10,
        padding: 10
    },
    contentContatiner:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 15,
        alignItems: 'flex-start'
    }

}
const Comment = (props) => {
    console.log(props);
  return (
    <div style={styles.wrapper}>
        <div>
            <img 
                src={props.path}
                style={styles.image}            
            />
        </div>
        <div style={styles.contentContatiner}>
            <div style={styles.nameText}>{props.name}</div>
            <div style={styles.commentText}>{props.comment}</div>
        </div>
    </div>
  )
}

export default Comment