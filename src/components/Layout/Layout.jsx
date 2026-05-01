import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header.jsx";
import Loader from "../Loader/Loader.jsx";
import s from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
