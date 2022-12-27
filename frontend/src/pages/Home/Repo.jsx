import styles from "./Repo.module.css";
export default function Repo({
  name,
  visibility,
  language,
  html_url: htmlUrl,
}) {
  function randomRgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["logo"]}>
        {Array(12)
          .fill(0)
          .map((el, index) => (
            <div
              key={index}
              style={{
                width: "33.3%",
                backgroundColor: randomRgba(),
              }}
            ></div>
          ))}
      </div>
      <div className={styles["data"]}>
        <div className={styles["first-row"]}>
          <div>{name}</div>
          <div className={styles["private"]}>{visibility}</div>
        </div>
        <div className={styles["second-row"]}>
          <div>{language}</div>
          <div>
            url:{" "}
            <a target="_blank" href={htmlUrl}>
              Click to visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
