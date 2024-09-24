import { User } from "@/types";

// check if the user is an admin
export default function isAdmin(user: User) {
    return user?.email === 'admin@asafarim.be';
}