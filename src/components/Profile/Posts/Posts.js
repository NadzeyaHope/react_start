import classes from './Posts.module.css';
import PostItem from "./PostItem";

export default () => {
    return <div className={classes.Posts}>
    {PostItem({name : 'Hello'})}
  </div>
}
