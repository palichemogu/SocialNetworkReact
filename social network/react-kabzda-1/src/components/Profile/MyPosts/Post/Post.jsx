import s from './Post.module.css';
const Post = (props) => {
  // console.log(props.message));
  return (
        <div className={s.item}>
          <img src='https://assets.blog.hgtv.ca/wp-content/uploads/2020/06/23174932/hanging-pictures-strategize.jpg?width=435' />
          {props.message}<br/>
         <span>like: </span> {props.numberOfLikes}
        </div>
  );
};
export default Post;