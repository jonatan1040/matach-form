import * as Realm from "realm-web";

// Create a component that lets an anonymous user log in
function Login({ setUser }) {
  const REALM_APP_ID = process.env.REACT_APP_REALM_APP_ID;
  const app = new Realm.App({ id: REALM_APP_ID });
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <button onClick={loginAnonymous}>Log In</button>;
}
export default Login;
