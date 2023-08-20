const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <main className="container flex h-full flex-col gap-y-12 overflow-auto sm:gap-y-24 xl:px-px">
        {children}
      </main>
    </>
  )
}

export { Wrapper }
