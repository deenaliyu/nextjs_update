"use client";

import '../globals.css'
import styles from './breaking.module.css';

export default function Page() {
  return (
    <div className={styles.component}>
      <div>BREAKING</div>
      <div>
        <button onClick={(e) => console.log("click")}>
          break this
        </button>
      </div>
    </div>
  );
}