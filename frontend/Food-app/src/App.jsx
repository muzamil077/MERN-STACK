import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

// const AdminRoutes = () => {
//   <Routes>
//     <Route path="" element={<Admin />} />
//   </Routes>;
// };

export default App;
