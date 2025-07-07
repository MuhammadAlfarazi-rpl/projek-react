import {Link} from "react-router-dom"

export default function Signup() {

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Buat Akun Bro</h1>
                    <input type="name" placeholder="Fullname"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Password Confirmation"/>
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                      Have an Account Already? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}