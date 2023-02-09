// Custom Hooks
import useToggleHeader from '../../../CustomHooks/UseToggleHeader';

// Components
import TopHeader from './TopHeader';
import Tabs from './TabFoods/Tabs';

export default function Header({Show, setShow}) {
  
  // movment for header
  const headerState = useToggleHeader();

  return(
    <>
      <TopHeader headerState={headerState} />
      <Tabs Show={Show} setShow={setShow} headerState={headerState} />
    </>
  )
}