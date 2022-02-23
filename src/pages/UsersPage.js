import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../actions/UserActions";

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.userReducer.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div>
            <main>
                <section>
                    <div>
                        <p>
                            You can create, update, delete and view all the users.
                        </p>
                    </div>
                </section>
                <div>
                    <div>
                        <h2>User list</h2>
                        <ul>
                            {users.map((user) => (
                                <li key={user.id}>
                                    <a>{user.id + " " + user.firstName + " " + user.lastName + " " + user.age}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </main>
        </div>
    )
}
export default UsersPage;