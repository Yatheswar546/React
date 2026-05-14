import styles from './Form.module.css';
// import Button from './Button'

export default function Form() {

    return (
        <>
            <div className={styles.formContainer}>
                <h1 className={styles.heading}>Login Form</h1>

                <form className={styles.form}>
                    <input type="text" placeholder="Enter Username "/>

                    <input type="password" placeholder="Enter Password" />

                    <button>Login</button>
                    {/* <Button /> */}
                </form>

            </div>
        </>
    );

}