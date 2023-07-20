"use client";
import Sidebar from "../component/sidebar";
export default function RootLayout({children, session} ) {
  return (
    <div className="realtive">
        <Sidebar />
        <div class="p-4 sm:ml-64 bg-white">
            <div>{children}</div>
        </div>

    </div>
  );
}
