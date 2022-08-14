const Wrapper = ({ children }) => {
  return (
    <div className="mx-auto flex h-full min-h-screen w-full max-w-screen-2xl items-center">
      <div className="grow px-4 py-9 md:px-8 2xl:px-10">{children}</div>
    </div>
  )
}

export default Wrapper
