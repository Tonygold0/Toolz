import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import logo from "./images/logo.png"
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

import Image from './Image'

const LayoutWrapper = ({ children }) => {

  return (
    <SectionContainer>
      <div className="flex relative pt-10 h-screen flex-col justify-between">
        <header style={{ zIndex: "1" }} className="flex w-full m-auto bg-primary-500 top-0 left-0 fixed ">
          <div className='flex w-full p-3 py-1 m-auto items-center justify-between mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>

            <div className=''>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  <div className=" align-middle ">
                    <Image width={60} height={60} src={logo} />
                  </div>
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden h-6 text-2xl font-semibold ">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:m-2 sm:p-2 hover:text-primary-700"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </header>
        <main className="mb-auto mt-10">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
