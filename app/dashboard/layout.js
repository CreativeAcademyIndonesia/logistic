"use client";
import Sidebar from "../component/sidebar";
import 'flowbite'

export default function RootLayout({children, session} ) {
  return (
    <div className="realtive">
        <Sidebar />
        <div className="p-4 md:pl-64 ml-0 md:ml-4 bg-white">
            <div>{children}</div>
        </div>
    </div>
  );
}
