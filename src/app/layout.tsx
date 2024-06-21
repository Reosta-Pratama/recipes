import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/Button/ScrollTop";
import favicon from "../../public/assets/img/favicon/favicon.ico"

export default function RootLayout({children} : Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <html lang="en">
            <link rel="icon" href={favicon.src} type="image/x-icon" sizes="16x16" />
            
            <body className="relative">
                {/* Header */}
                <Header></Header>

                {/* Main */}
                <main>
                    {children}
                </main>

                {/* Footer */}
                <Footer></Footer>

                {/* Scrolling to Top */}
                <ScrollTop></ScrollTop>
            </body>
        </html>
    );
}
