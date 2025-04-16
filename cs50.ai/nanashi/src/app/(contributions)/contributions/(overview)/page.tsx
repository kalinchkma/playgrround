import PageHeaderWithBack from "@/components/common/page-header"
import ContributionCard from "@/components/contribution-card/contribution-card"

const CreationPage = () => {
  return (
    <>
    <PageHeaderWithBack title='My Contributions to the world' />
    <div className='container mx-auto px-2 pb-2 pt-4'>
      {/* contributions container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {/* contribution card */}
        <ContributionCard />
      </div>
    </div>
    </>
  )
}

export default CreationPage