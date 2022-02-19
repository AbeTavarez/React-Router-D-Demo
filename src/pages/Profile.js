import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";
const Profile = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h1>Profile Page</h1>

      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </div>
  );
};

export default Profile;
