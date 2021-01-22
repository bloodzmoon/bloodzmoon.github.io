import Head from 'next/head'

type Props = { title: string; children: React.ReactNode }

function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </>
  )
}

export { Layout }
