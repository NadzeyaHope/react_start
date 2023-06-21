import ProfileStatus from './Profile_status';
import classes from './Profile.module.css'
import Profile_photo from './Profile_photo';
export default () => {
    return <div className={classes.Profile_main}>
    {ProfileStatus()};
    {Profile_photo()}
    </div>
}