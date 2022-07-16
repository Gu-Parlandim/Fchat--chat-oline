import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "../pages/Chat";

const Routers = () => {
  //
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chat />} />

        {/* <Route element={<PrivateRoute/>}>
                    <Route element={<Sidebar/>}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    
                </Route> */}
      </Routes>
    </Router>
  );
};

export default Routers;
