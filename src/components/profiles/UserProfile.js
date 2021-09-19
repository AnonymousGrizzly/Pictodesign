import ProfileForm from './ProfileForm'; 
import "../../design/UserProfile.css"; //import CSS

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
