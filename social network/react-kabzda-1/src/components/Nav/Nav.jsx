import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";
const Nav=(props)=>{

    let arrFr= props.state.friendsBar.map(
        (el)=>{
            // return <FriendsNav name={el.name} id={el.id} image={el.image}/>;
            return <span><img src={el.image}/>{el.name}</span>;
        }
    );
    return(<nav className={s.nav}>
      <ul>
        <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></li>
        <li><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
        <li><NavLink to="/media" activeClassName={s.activeLink}>Media</NavLink></li>
        <li><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></li>
        <li><NavLink to="/friends" activeClassName={s.activeLink}>
          Friends {arrFr}
        </NavLink></li>
      </ul>
      </nav>);
}
export default Nav;