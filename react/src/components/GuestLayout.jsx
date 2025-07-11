import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuessLayout() {
    const {token} = useStateContext()
    debugger;
    if (token) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}