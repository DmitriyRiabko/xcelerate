import React, { InputHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Button({ children }: IButton) {
  return <button className={styles.button}>{children}</button>;
}
