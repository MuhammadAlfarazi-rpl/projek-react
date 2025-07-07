import {Link} from "react-router-dom"

export default function Login() {

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login Bro</h1>
                    <input type="email" placeholder="Email Adress"/>
                    <input type="password" placeholder="Password Confirmation"/>
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Not Registered? <Link to="/Signup">Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}