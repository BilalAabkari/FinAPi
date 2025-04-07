import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/Home.tsx";
import { AuthPage } from "./modules/AuthPage";
import MainManagementBoard from "./modules/Management";
import { useEffect, useState } from "react";
import { useAuth } from "./contexts";

function App() {
    const { checkSession } = useAuth();

    const [sessionChecked, setSessionChecked] = useState(false);

    useEffect(() => {
        checkSession().then(() => setSessionChecked(true));
    }, [checkSession]);

    if (!sessionChecked) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/login"} element={<AuthPage />} />
                    <Route path={"/signup"} element={<Home />} />
                    <Route
                        path={"/management"}
                        element={<MainManagementBoard />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
