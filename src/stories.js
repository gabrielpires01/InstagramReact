import React from 'react'

export default function Stories () {
    const storieList = [
        {
            img:"../assets/img/9gag.svg",
            name:"9gag"
        },
        {
            img:"../assets/img/meowed.svg",
            name:"meowed"
        },
        {
            img:"../assets/img/barked.svg",
            name:"barked"
        },
        {
            img:"../assets/img/nathanwpylestrangeplanet.svg",
            name:"nathanwpylestrangeplanet"
        },
        {
            img:"../assets/img/wawawicomics.svg",
            name:"wawawicomics"
        },
        {
            img:"../assets/img/respondeai.svg",
            name:"respondeai"
        },
        {
            img:"../assets/img/filomoderna.svg",
            name:"filomoderna"
        },
        {
            img:"../assets/img/memeriagourmet.svg",
            name:"memeriagourmet"
        }
    ]

    return (
        <div className="stories">
            {storieList.map(story => (
                <div className="story">
                    <div className="imagem">
                        <img src={story.img}/>
                    </div>
                    <div className="usuario">
                        {story.name}
                    </div>
                </div>
            ))}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}