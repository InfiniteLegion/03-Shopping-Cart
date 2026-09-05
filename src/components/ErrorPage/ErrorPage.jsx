import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <>
            <h1>Oh no! This route does not exists!</h1>
            <Link to="/">Go home</Link>
        </>
    );
}

export default ErrorPage;