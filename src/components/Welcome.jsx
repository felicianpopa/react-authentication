import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../features/auth/authSlice";
import { Link } from "react-router-dom";
const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const welcome = user ? `Welcome ${user}` : `Welcome`;
  return (
    <section>
      <h1>{welcome}</h1>
      <p>Token: {token}</p>
      <p>
        <Link to="/users">Go to users</Link>
      </p>
    </section>
  );
};

export default Welcome;
