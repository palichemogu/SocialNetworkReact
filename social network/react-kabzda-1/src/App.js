import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News";
import Media from "./components/Media/Media";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {Route} from "react-router-dom";

//jsx
function  App(props) {
    return (
        <div className="App">
            <Header/>
            <Nav state={props.state.sidebar}/>
            <div className='App-content'>
                <Route  path='/dialogs' render={()=> <Dialogs
                    state={props.state.dialogsPage}/>} />

                <Route path='/profile' render={()=> <Profile
                    state={props.state.profilePage} addPost={props.addPost}/>}/>

                <Route path='/news' render={()=> <News/>}/>
                <Route path='/media' render={()=> <Media/>}/>
                <Route path='/settings' render={()=> <Settings/>}/>
                <Route path='/friends' render={()=><Friends/>}/>
            </div>
        </div>
    );
}

export default App;
