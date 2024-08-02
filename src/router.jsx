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
import Tab1Content from "./pages/dashboard/sub-pages/Tab1Content";
import Tab2Content from "./pages/dashboard/sub-pages/Tab2Content";
import Tab3Content from "./pages/dashboard/sub-pages/Tab3Content";
import Tab4Content from "./pages/dashboard/sub-pages/Tab4Content";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blankpage" element={<DashboardBlankPage />} />
            <Route path="tables" element={<DashboardTables />} />
            <Route path="forms" element={<DashboardForms />} />
            <Route path="tabbedcontent" element={<DashboardTabbedContent />}>
                    <Route path="tab1" element={<Tab1Content />} />
                    <Route path="tab2" element={<Tab2Content />} />
                    <Route path="tab3" element={<Tab3Content />} />
                    <Route path="tab4" element={<Tab4Content />} />
            </Route>
            <Route path="calendar" element={<DashboardCalendar />} />
        </Route>
    )
)
