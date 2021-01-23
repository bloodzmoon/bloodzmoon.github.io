import { GetServerSideProps } from 'next'
import { Works } from 'api/works'

function WorksIndexPage() {
  return (
    <div className="w-full">
      <div className="sticky top-0 bg-white h-18 mx-8 border-b flex justify-between items-center">
        <div>Quick search for anything</div>
        <div>Github</div>
      </div>
      <div className="m-8">Index</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch(process.env.API + '/works')
  const sidebarData: Works = await res.json()

  return {
    props: {
      title: 'Works - Thanyathon',
      layoutClassName: 'flex',
      sidebarData,
    },
  }
}

export default WorksIndexPage
