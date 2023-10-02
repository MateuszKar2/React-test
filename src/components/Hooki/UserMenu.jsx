import { useUser } from "./userContext";

export const  UserMenu = () => {
    const { isLoggedIn, username, logIn, logOut } = UseUser();

    return (
        <div>
          {isLoggedIn && <p>{username}</p>}
          {isLoggedIn ? (
            <button onClick={logOut}>Log out</button>
          ) : (
            <button onClick={logIn}>Log in</button>
          )}
        </div>
      );
}