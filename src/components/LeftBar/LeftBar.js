import classes from './LeftBar.module.css';
export default () => {
    return <section className={classes.Left_bar}>
    <nav className={classes.nav}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </nav>
</section>
}