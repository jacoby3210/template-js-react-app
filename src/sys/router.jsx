import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowcasePage from "../pages/showcase";

// ========================================================================= //
// Application Router.												    													 //
// Using router to control navigation through application pages.						 //
// ========================================================================= //

export function Router() {
  return (
    <Routes>
      <Route element={<ShowcasePage />} path='/' exact />
    </Routes>
  );
}

// ========================================================================= //
