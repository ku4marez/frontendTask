import React from "react";
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import Users from "./pages/UsersPage";
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
                    </ul>
                </nav>

                <Routes>
                    <Route path="/users" element={<Users/>}/>
                </Routes>
            </div>
        </Provider>
    );
}