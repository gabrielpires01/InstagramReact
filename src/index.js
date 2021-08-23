import ReactDOM from 'react-dom'
import NavBar from './navbar'
import Body from './posts'


function App () {
    return (
        <div>
            <NavBar />
            <Body />
            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))