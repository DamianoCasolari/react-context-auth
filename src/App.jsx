import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaulLayout } from "./assets/views/layouts/DefaulLayout";
import { HomePage } from "./assets/views/HomePage";
import { BlogPage } from "./assets/views/BlogPage";
import { SinglePost } from "./assets/views/SinglePost";
import { AppLogin } from "./assets/views/auth/AppLogin";
import { AuthProvider } from "./assets/context/AuthContext";
import { PrivatePage } from "./assets/middleware/PrivatePage";
import { DashBoard } from "./assets/views/auth/dashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PrivatePage>
          <Routes>
            <Route element={<DefaulLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/auth" element={<AppLogin />}></Route>
              <Route path="/dashboard" element={<DashBoard />}></Route>
              <Route path="/blog" element={<BlogPage />}></Route>
              <Route path="/blog/:slug" element={<SinglePost />}></Route>
            </Route>
          </Routes>
        </PrivatePage>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
