
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import NewsletterForm from '@/components/NewsletterForm'
import ToolCard from '@/components/ToolCard'


export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y pt-8 divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 md:space-y-5">
          <p className="text-xl text-center leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <div className="shadow-lg rounded-md border-2 mb-10">
          <div className="bg-primary-500">
            <div className="p-3 justify">
              <h3 className='text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9 md:text-2xl md:leading-9'>General Tools</h3>
              <p>This group of tools are for your daily activities. You can check your IP Address details or may be genrate a password or even convert a specific write up, we've got you covered. Get in there make use of our free General Tools and save yourself the stress!</p>
            </div>
          </div>

          <div className=''>
            <div className="grid gap-2 p-4 xl:grid-cols-2">
              <ToolCard src="/static/images/count.png" text="Words counter" href="/tools/words_counter" />
              <ToolCard src="/static/images/text-convert.png" text="Case Converter" href="" />
              <ToolCard src="/static/images/text-slug.png" text="Text To Slug" href="" />

              <ToolCard src="/static/images/ip-lookup.png" text="IP LookUp" href="" />
              <ToolCard src="/static/images/my-ip.png" text="What is My IP" href="" />
              <ToolCard src="/static/images/password.png" text="Password Generator" href="" />
            </div>
          </div>

        </div>

        <div className="shadow-lg rounded-md border-2  mb-20">
          <div className="bg-primary-500">
            <div className="p-3  justify">
              <h3 className='text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9 md:text-2xl md:leading-9'>Email Tools</h3>
              <p>This group of tools are for email marketing. Do you have a document with a number of emails, and you can't go through the document typing out each emails one after the other? Then our free Email Extractor Tool is for you. Get in there make use of our free email marketing tools and save yourself the stress!</p>
            </div>
          </div>

          <div className=''>
            <div className="grid gap-2 p-4 xl:grid-cols-2">
              <ToolCard src="/static/images/email.gif" text="Email Address Validator" href="/tools/email_extractor" />
              <ToolCard src="/static/images/email.png" text="Email Address Extractor" href="/tools/email_extractor" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
