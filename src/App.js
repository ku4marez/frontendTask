import React from "react";
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import Users from "./pages/UsersPage";
import {ErrorPage} from './pages/ErrorPage';
import {Provider} from "react-redux";
import store from "./store";

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/errorPage">ErrorPage</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/errorPage" element={<ErrorPage/>}/>
                </Routes>
            </div>
        </Provider>
    );
}