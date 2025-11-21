import { Routes, Route } from "react-router-dom";
import Apply from "./pages/Apply.jsx";
import Login from "./pages/Login.jsx";
import MemberDashboard from "./pages/MemberDashboard.jsx";
import PendingList from "./pages/librarian/PendingList.jsx";
import ApplicationDetail from "./pages/librarian/ApplicationDetail.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Apply />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/login" element={<Login />} />

        {/* Member Dashboard */}
        <Route
          path="/member"
          element={
            <ProtectedRoute role="member">
              <MemberDashboard />
            </ProtectedRoute>
          }
        />

        {/* Librarian pages */}
        <Route
          path="/librarian/pending"
          element={
            <ProtectedRoute role="librarian">
              <PendingList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/librarian/application/:id"
          element={
            <ProtectedRoute role="librarian">
              <ApplicationDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
