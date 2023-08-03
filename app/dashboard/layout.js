"use client";
import Sidebar from "../component/sidebar";
import 'flowbite'

export default function RootLayout({children, session} ) {
  return (
    <div className="realtive">
        <Sidebar />
        <div className="p-4 lg:pl-64 ml-0 lg:ml-4 bg-white">
            <div>{children}</div>
        </div>
    </div>
  );
}
