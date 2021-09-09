import s from './MessageItem.module.css';

const MessageItem=(props)=>{
    return(
        <div className={s.message}>
            <img src={props.avatar}/> {props.message}
        </div>
    );
};

export default MessageItem;