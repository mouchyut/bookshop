"use client";
import '../style/globals.css';
import Header from './components/Header';
import { usePathname } from 'next/navigation';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <html lang="en">
            <body>
                {pathname !== '/CustomerSatisfactionBackOffice/Login' && <Header />}
                <main>{children}</main>
            </body>
        </html>
    );
}