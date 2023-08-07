const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main
      className="container overflow-auto h-full xl:px-2 flex flex-col gap-y-12 sm:gap-y-24">
      {children}
    </main>
  )
}

export { Wrapper }
