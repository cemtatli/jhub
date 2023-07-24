const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="w-full">
      <div className="container overflow-auto xl:px-1">{children}</div>
    </main>
  )
}

export { MainLayout }
