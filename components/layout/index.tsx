const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="container h-fit-screen-mobile overflow-auto md:h-fit-screen">{children}</main>
}

export { MainLayout }
