import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
const Dialogs = (props) => {


    let dialogsUI=props.state.dialogsPeople.map(
        (human)=>{
            return <DialogItem name={human.name} id={human.id} image={human.image}/>
        }
    )
    let messageUI=props.state.messagesData.map(
        (message)=>{
            return <MessageItem message={message.message} id={message.id} avatar={message.avatar} />
        }
    );
    let textEvent=React.createRef();
    let alertMessage=()=>{
        let text=textEvent.current.value;
        alert(text);
    };
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {dialogsUI}
            </div>
            <div className={s.messages}>
                {messageUI}
            </div>
            <div className={s.toText}>
                <textarea ref={textEvent}></textarea>
                <button onClick={alertMessage}>send</button>
            </div>
        </div>
    );
};
export default Dialogs;