const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main
      className="overflow-auto h-full xl:px-1 flex flex-col gap-y-12 sm:gap-y-24 container">
      {children}
    </main>
  )
}

export { Wrapper }
