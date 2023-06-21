import classes from './Posts.module.css'
export default (props) => {
    return <div className={classes.Post_item}>
    <div><img src="https://i1.wp.com/volosylady.ru/wp-content/uploads/2016/09/kvadratnaya-forma-lica.jpg" /></div>
    <div className={classes.Post_text}>{props.name}</div>
  </div>
}