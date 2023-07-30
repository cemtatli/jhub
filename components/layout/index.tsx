const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="container h-fit-screen-mobile overflow-auto md:h-fit-screen xl:px-2">{children}</main>
}

export { Wrapper }
