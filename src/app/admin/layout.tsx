import { ReactNode } from "react";
import { Sidebar } from "@/components/AdminSidebar";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  let isAuthenticated = false;
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      isAuthenticated = true;
    } catch {}
  }

  if (!isAuthenticated) {
    redirect("/adminlogin");
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-black">
      <Sidebar />
      <main className="flex-1 p-6 pb-20 md:pb-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}