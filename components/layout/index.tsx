const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main
      className="overflow-auto container h-full xl:px-1 flex flex-col gap-y-12 sm:gap-y-24">
      {children}
    </main>
  )
}

export { Wrapper }
