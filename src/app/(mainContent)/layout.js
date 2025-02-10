import Footer from "@/components/Footer";


export default function mainLayout({ children }) {
    return (
        <>
            {children}
            <Footer />
        </>
    );
}