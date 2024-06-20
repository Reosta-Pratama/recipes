import Header from "@/components/Header/Header";
import "./globals.css";

export default function RootLayout({children} : Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <html lang="en">
            <body>
                {/* Header */}
                <Header></Header>

                {/* Main */}
                {children}

                {/* Footer */}
            </body>
        </html>
    );
}
