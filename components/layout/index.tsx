const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="container h-fit-screen-mobile overflow-auto md:h-fit-screen xl:px-0">{children}</main>
}

export { MainLayout }
