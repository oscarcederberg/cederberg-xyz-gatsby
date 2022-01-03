import * as React from 'react'

const Layout = ({ pageTitle, subTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main className="text-center">
        <h1 className="text-5xl font-title lowercase -mb-2">{pageTitle}</h1>
        <h1 className="text-l font-title uppercase font-light -my-1">{subTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout