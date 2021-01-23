import Head from 'next/head'

type Props = {
  title: string
  children: React.ReactNode
  layoutClassName?: string
}

function Layout({ title, layoutClassName = '', children }: Props) {
  const classes = ('max-w-screen-xl mx-auto ' + layoutClassName).trim()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes}>{children}</div>
    </>
  )
}

export { Layout }
