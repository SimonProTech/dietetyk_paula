import './globals.css'
import { ThemeProvider } from '@/app/components/global/theme-provider'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import { Toaster } from '@/components/ui/sonner'
import { metadata as defaultMetadata } from '@/utils/metadata-seo'
import { Metadata } from 'next'
import ProgressBarProvider from '@/app/components/global/progressBar-provider'
import ShowMovingMenuOnDesktop from '@/app/components/global/ShowMovingMenuOnDesktop'
import { ModalProvider } from '@/app/components/global/modal-nav-provider'
import NavDrawer from '@/app/components/global/common/NavDrawer'
export const metadata: Metadata = defaultMetadata

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html suppressHydrationWarning lang="pl">
            <body className={`antialiased`}>
            <ModalProvider>
                <ThemeProvider
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                    attribute="class"
                >
                    <NavDrawer/>
                    <Header />
                    {children}
                    <Footer />
                    <Toaster richColors />
                    <ProgressBarProvider />
                    <ShowMovingMenuOnDesktop />
                </ThemeProvider>
            </ModalProvider>

            </body>
        </html>
    )
}
