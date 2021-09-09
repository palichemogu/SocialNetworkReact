import {rerenderEntireTree} from "../render";


let state={
    profilePage:
{
    postsInfoData: [
        {id: 1, message: 'Hello', numberOfLikes: 24},
        {id: 2, message: 'My name is Ivan', numberOfLikes: 8},
        {id: 3, message: 'Lesssgo', numberOfLikes: 1234}
    ]
},

    dialogsPage: {
        dialogsPeople: [
            {id: 1, name: 'Alex',image:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 2, name: 'Gleb',image:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 3, name: 'Tatyana',image:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 4, name: 'Ivan',image:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'}
        ],
        messagesData: [
            {id: 1, message: 'Hello!',avatar:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
             {id: 2, message: 'How are you?',avatar:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 3, message: 'yo',avatar:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 4, message: 'yo',avatar:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 5, message: 'yo',avatar:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'}
        ]
    },

    sidebar:{
        friendsBar:[
            {id: 1, name: 'Alex',image:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 2, name: 'Gleb',image:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 3, name: 'Tatyana',image:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'}
        ]
    }
};
export let addPost=(postMessage)=>{
  let newPostInfo={
      id:5,
      message:postMessage,
      numberOfLikes:0
    }
    state.profilePage.postsInfoData.push(newPostInfo);
  rerenderEntireTree(state);
};
export default state;