import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../../../pages/MainPage";
import NotFoundPage from "../../../pages/NotFoundPage";
import ReservationPage from "../../../pages/ReservationPage";
import DefaultLayout from "../../Layouts/DefaultLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
