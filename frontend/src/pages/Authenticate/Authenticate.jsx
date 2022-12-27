import styles from "./Authenticate.module.css";
import { ReactComponent as GithubLogo } from "../../assets/github-logo.svg";

export default function Authenticate() {
  const handleClick = async () => {
    window.location.href = `
    https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}?path=/&scope=user:email`;
  };
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["card"]}>
        <div>
          <button onClick={handleClick}>
            Authenticate with github{" "}
            <span>
              <GithubLogo />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
