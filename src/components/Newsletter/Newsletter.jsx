import React, { useState } from "react";
import styles from "./newsletter.module.css";

const Newsletter = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <section className="newsletter">
            <form className={style.form}>
                <label htmlFor="Din Mail"></label>
                <input type="email" />
            </form>
        </section>
    );
}