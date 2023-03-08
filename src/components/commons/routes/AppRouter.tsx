import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../../../pages/MainPage";
import NotFoundPage from "../../../pages/ReservationPage";
import ReservationPage from "../../../pages/ReservationPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
