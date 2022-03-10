import React from "react";
import {
    Routes,
    Route,
} from 'react-router-dom';
import UserPage from "./pages/UserPage";
import {Provider} from "react-redux";
import store from "./store";

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <Routes>
                    <Route path="/users" element={<UserPage/>}/>
                </Routes>
            </div>
        </Provider>
    );
}