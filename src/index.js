import ReactDOM from 'react-dom'
import SideBar from './sidebar'
import NavBar from './navbar'


function App () {
    return (
        <div>
            <NavBar />
            <SideBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))