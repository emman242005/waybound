import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-navy">
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden p-6 sm:p-10">{children}</main>
    </div>
  );
}