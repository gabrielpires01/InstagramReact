import React from "react"

export default function SideBar () {
    const sugestions = [
        {
            img: "../public/assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
            reason: "Segue você"
        },
        {
            img: "../public/assets/img/chibirdart.svg",
            name: "chibirdart",
            reason: "Segue você"
        },
        {
            img: "../public/assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar",
            reason: "Novo no Instagram"
        },
        {
            img: "../public/assets/img/adorable_animals.svg",
            name: "adorable_animals",
            reason: "Segue você"
        },
        {
            img: "../public/assets/img/smallcutecats.svg",
            name: "smallcutecats",
            reason: "Segue você"
        }
    ]

    return (
        <div class='sidebar'>
            <div class='usuario'>
                <img src="../public/assets/img/catanacomics.svg" />
                <div class='texto'>
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>
            <Sugestion sugestions={sugestions}/>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
        
    )
}

function Sugestion (props) {
    

    return (
        <div class='sugestoes'>
            <div class='titulo'>
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {props.sugestions.map(sugestion => (
                <div class='sugestao'>
                    <div class='usuario'>
                        <img src={sugestion.img}/>
                        <div class='texto'>
                            <div class='nome'>{sugestion.name}</div>
                            <div class='razao'>{sugestion.reason}</div>
                        </div>
                    </div>
                    <div class='seguir'>Seguir</div>
                </div>
            ))}
        </div>
    )
}