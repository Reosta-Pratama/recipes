import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/Button/ScrollTop";

export default function RootLayout({children} : Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <html lang="en">
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
