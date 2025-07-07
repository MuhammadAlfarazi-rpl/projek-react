import {Link} from "react-router-dom"
import {useRef} from "react"

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_Confirmation: passwordConfirmationRef.current.value,
        }
        // Log
        console.log(payload);
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Buat Akun Bro</h1>
                    <input ref={nameRef} placeholder="Fullname"/>
                    <input ref={emailRef} type="email" placeholder="Email"/>
                    <input ref={passwordRef} type="password" placeholder="Password"/>
                    <input ref={passwordConfirmationRef}  type="password" placeholder="Password Confirmation"/>
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                      Have an Account Already? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}