import MainLayout from "../../components/MainLayout/MainLayout";
import Sidebar from "../../components/SideBar/Sidebar";
import "./Dasboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-main">
        <Sidebar/>
        <MainLayout/>
    </div>
  )
}
