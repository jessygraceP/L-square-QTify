//import Menu from '../Menu';
import { ReactComponent as SearchIcon} from './Search icon.svg';

const Searchbox = () => {
    return <div
    style={{
        position: 'relative'
    }}>
    <form style={{
        display: 'flex',
        minWidth: '570px'
    }}>
        <input 
        placeholder='search an album of your choice'
        style={{
            flex: 1,
            borderRadius: '8px 0px 0px 8px',
            padding: '8px'

        }}
        />
        <button style={{
            width: '66px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0 8px 8px 0'
        }}>
        <SearchIcon width={20} height={20}/>
    </button>
    </form>
    {/* <Menu data={[1,2,3,4,5]}/>   */}
  </div>
}
export default Searchbox;