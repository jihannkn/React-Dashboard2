import DashboardMainLayout from "./components/layouts/dashboard/DashboardMainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardBlankPage from "./pages/dashboard/DashboardBlankPage";
import DashboardTables from "./pages/dashboard/DashboardTables";
import DashboardForms from "./pages/dashboard/DashboardForms";
import DashboardTabbedContent from "./pages/dashboard/DashboardTabbedContent";
import DashboardCalendar from "./pages/dashboard/DashboardCalendar";


import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Navigate
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blankpage" element={<DashboardBlankPage />} />
            <Route path="tables" element={<DashboardTables />} />
            <Route path="forms" element={<DashboardForms />} />
            <Route path="tabbedcontent" element={<DashboardTabbedContent />} />
            <Route path="calendar" element={<DashboardCalendar />} />
        </Route>
    )
)
