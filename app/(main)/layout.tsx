import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-360 flex-col">
        {children}
      </div>
      <Footer />
    </>
  )
}
