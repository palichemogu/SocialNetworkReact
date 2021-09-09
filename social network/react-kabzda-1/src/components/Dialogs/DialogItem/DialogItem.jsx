import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem=(props)=>{
    let path='/dialogs/'+props.id;
    let way=props.image;
  return(
      <div className={s.dialog}>
          <img src={way} alt={'avatar'}/>
          <NavLink activeClassName={s.activeLink} to={path} >{props.name}</NavLink>
      </div>
  );
};
export default DialogItem;