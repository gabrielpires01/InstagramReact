import ReactDOM from 'react-dom'
import SideBar from './sidebar'


function App () {
    return (
        <div>
            <SideBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))