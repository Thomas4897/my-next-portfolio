import HomeLayout from './Home/layout'; // Import the layout
import Home from './Home/page'; // Import the Home page component

export default function Page() {
    return (
        <HomeLayout> {/* Use the DashboardLayout to wrap Home */}
            <Home />
        </HomeLayout>
    );
}