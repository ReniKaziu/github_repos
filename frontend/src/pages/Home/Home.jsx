import React from "react";
import axiosInstance from "../../common/config/axios.instance";
import styles from "./Home.module.css";
import Repo from "./Repo";

export default function Home() {
  const [user, setUser] = React.useState({});
  const [repos, setRepos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchUser = async () => {
    try {
      const promises = ["/github/user", "/github/repos"].map((link) =>
        axiosInstance.get(link)
      );
      const [user, repos] = await Promise.allSettled(promises);
      console.log(user, repos);
      setUser(user.value.data.user);
      setRepos(repos.value.data.repos);
      setIsLoading(false);
    } catch {
      alert("Could not fetch user");
    }
  };
  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles["container"]}>
          <div className={styles["user-card"]}>
            <div className={styles["avatar"]}>
              <img src={user.avatar_url} />
            </div>
            <p>{user.login}</p>
            <p>id: {user.id}</p>
            <p>
              profile url:{" "}
              <a target="_blank" href={user.html_url}>
                click to visit
              </a>
            </p>
            <div className={styles["follow"]}>
              <div>
                <p>followers: {user.followers}</p>
              </div>
              <div>
                <p>following: {user.following}</p>
              </div>
            </div>
          </div>
          <div className={styles["repos"]}>
            {repos.map((repo) => (
              <Repo key={repo.id} {...repo} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
