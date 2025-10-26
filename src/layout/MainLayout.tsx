
import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Header from "../components/Header";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="mt-4 px-6 mb-4">{children}</main>
      </div>
    </div>
  )
}

export default MainLayout;
