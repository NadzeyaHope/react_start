import classes from './Posts.module.css';
export default () => {
    return <div className={classes.Posts_input}>
    <div>
    <input type='text' />
    </div>
    <button>Send</button>
  </div>
}