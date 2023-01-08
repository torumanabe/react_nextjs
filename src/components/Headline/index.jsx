import styles from "./Headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <p className={styles.description}>
        アイテムの数は{props.children}です。
      </p>

      <button onClick={props.handleReduce}>減らす</button>
    </div>
  );
}
