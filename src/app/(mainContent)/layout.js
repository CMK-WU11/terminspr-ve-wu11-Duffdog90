import Footer from "@/components/Footer";
import { cookies } from "next/headers";


export default async function mainLayout({ children }) {

    const cookieStore = await cookies()
    let role = cookieStore.get("dans_role")

    return (
        <>
            {children}
            <Footer role={role} />
        </>
    );
}