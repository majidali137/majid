import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home.jsx";

import ReactStartVSPowerFunnel from "./feacture/recentwork/ReactWork/ReactStartVSPowerFunnel";
import ReactWoldWise from "./feacture/recentwork/ReactWork/ReactWorldWise";
import WordPressProject from "./feacture/recentwork/WordpressWork/WordPressProject";
import WordPressProjects from "./feacture/recentwork/WordpressWork/WordPressProjects";

import Blog from "./ui/Blog";
import BlogePage from "./feacture/blog/BlogePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          {/* React react work */}
          <Route
            path="/react-project-1"
            element={<ReactStartVSPowerFunnel />}
          />
          <Route path="/react-project-2" element={<ReactWoldWise />} />
          {/* WordPress react work */}
          <Route path="/wordpress-project-1" element={<WordPressProject />} />
          <Route path="/wordpress-project-2" element={<WordPressProjects />} />
          {/* POST pages */}
          <Route path="/blog" name="blo" element={<BlogePage />} />
          <Route path="/blog/:slug" element={<Blog/>} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
