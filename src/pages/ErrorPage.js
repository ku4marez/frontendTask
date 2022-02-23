import {NavLink} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <>
            <main>
                <section>
                    <div>
                        <h2>
                            Что-то пошло не так. Перезагрузите станицу или вернитесь на{" "}
                            <NavLink to={"/"}>на главную страницу</NavLink>
                        </h2>
                    </div>
                </section>
            </main>
        </>
    );
};