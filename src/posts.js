import Stories from "./stories";
import React from "react";
import SideBar from "./sidebar";

export default function Body () {
    const posts = [
        {
            imgUser: "../assets/img/meowed.svg",
            name: "meowed",
            imgPost:"../assets/img/gato-telefone.svg",
            imgAnswer:"../assets/img/respondeai.svg",
            answer:"respondeai",
            number: 101.523
        },
        {
            imgUser: "../assets/img/barked.svg",
            name: "barked",
            imgPost:"../assets/img/dog.svg",
            imgAnswer:"../assets/img/adorable_animals.svg",
            answer:"adorable_animals",
            number: 99.159
        }
    ]

    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts posts={posts}/>
            </div>
            <SideBar />
        </div>
    )
}

function Posts (props) {
    return (
        <div className="posts">
            {props.posts.map(post => (
                <div className="post">
                    <div className="topo">
                        <div class="usuario">
                            <img src={post.imgUser} />
                            {post.name}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div class="conteudo">
                        <img src={post.imgPost} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                        </div>

                        <div class="curtidas">
                        <img src={post.imgAnswer}/>
                        <div class="texto">
                            Curtido por <strong>{post.imgAnswer}</strong> e <strong>outras {post.number} pessoas</strong>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}