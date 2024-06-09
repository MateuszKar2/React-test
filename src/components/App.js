import Profile from './Profile/Profile'
import Statistic from './Statistic/Statistic'


import user from './Data/user.json'
import data from './Data/data.json'
import friends from './Data/friends.json'
import transactions from './Data/transatcions.json'



const App = () => {

    return (
        <>
            <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}/>
            <Statistic
            stats={data}
            title="Upload stats"/>
         </>
    )
}

export default App;