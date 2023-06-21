import PostInput from "./Posts/PostInput";
import ProfileMain from "./ProfileMain";
import Posts from "./Posts/Posts";
import classes from './Profile.module.css';
export default () =>{
    return <section className={classes.Profile}>
    {ProfileMain()}
    {PostInput()}
    {Posts()}
      </section>
}