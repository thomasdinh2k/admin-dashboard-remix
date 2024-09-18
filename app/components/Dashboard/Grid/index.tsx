import ActivityGraph from '../ActivityGraph';
import RecentTransactions from '../RecentTransactions';
import StatsCards from '../StatCards';
import UsageRadar from '../UsageRadar';

const Grid = () => {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
        <StatsCards />
        <ActivityGraph />
        <UsageRadar />        
        <RecentTransactions /> 

        
    </div>
  )
}

export default Grid