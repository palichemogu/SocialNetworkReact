import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from "react";

const MyPosts = (props) => {
    let postsUI=props.postsInfoData.map(
        (post)=>{
            return <Post message={post.message} id={post.id} numberOfLikes={post.numberOfLikes}/>
        }
    );
    let newPostElement=React.createRef();
    let addNewPost=()=>{
      let text=newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value='';
    };
  return (
    <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addNewPost}>Add post</button>
            </div>
        </div>
      <div>New post</div>
      <div className={s.posts}>
          {postsUI}
      </div>
    </div>
  );
};
export default MyPosts;