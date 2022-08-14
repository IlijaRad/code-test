const Wrapper = ({ children }) => {
  return (
    <div className="mx-auto flex h-full min-h-screen w-full max-w-screen-2xl items-center">
      <div className="grow px-4 py-9 md:px-8 2xl:px-10">
        <div className="mx-auto w-full max-w-2xl rounded-lg border border-gray-200 bg-white px-8 py-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Wrapper
