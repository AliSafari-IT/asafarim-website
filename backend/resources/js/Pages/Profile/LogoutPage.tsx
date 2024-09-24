import GuestLayout from "@/Layouts/GuestLayout";
import Logout from "../Auth/Logout";

export default function LogoutPage() {
    return <GuestLayout>
        <h1>User Logout Page</h1>
        <p>
            This is the user logout page
        </p>
        <Logout />
    </GuestLayout>;
}