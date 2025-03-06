import DashboardLayout from "~/components/layout/DashboardLayout";
import AuthPage from "~/utils/AuthPage";

const DashboardPage = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div>Dashboard</div>
    </DashboardLayout>
  );
};

export default AuthPage(DashboardPage);
