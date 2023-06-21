import classes from './Navigation.module.css';
export default () => {
    return <section className={classes.Navigation}>
    <div className={classes.Name_site}>Hi its Nodemon</div>
    <nav className={classes.nav}>
      <div>Home</div>
      <div>Messages</div>
      <div>News</div>
      <button>Sing up</button>
    </nav>
  </section>
}