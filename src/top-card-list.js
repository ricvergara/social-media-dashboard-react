import React from 'react'

function TopCardList() {
    return (
        <section class="top-cards">
        <div class="wrapper">
            <div class="grid">
                <article class="card facebook">
                    <p class="card-title">
                        <img src="images/icon-facebook.svg " alt=" "/> @ricardov.dev
                    </p>
                    <p class="card-followers">
                        <span class="card-followers-number">1987</span>
                        <span class="card-followers-title">Followers</span>
                    </p>
                    <p class="card-today">
                        <img src="images/icon-up.svg" alt=""/> 12 Today
                    </p>
                </article>
                <article class="card twitter">
                    <p class="card-title">
                        <img src="images/icon-twitter.svg" alt=" "/> @ricardov.dev
                    </p>
                    <p class="card-followers">
                        <span class="card-followers-number">1044</span>
                        <span class="card-followers-title">Followers</span>
                    </p>
                    <p class="card-today">
                        <img src="images/icon-up.svg" alt=""/> 99 Today
                    </p>
                </article>
                <article class="card instagram">
                    <p class="card-title">
                        <img src="images/icon-instagram.svg" alt=" "/> @ricardov.dev
                    </p>
                    <p class="card-followers">
                        <span class="card-followers-number">11k</span>
                        <span class="card-followers-title">Followers</span>
                    </p>
                    <p class="card-today">
                        <img src="images/icon-up.svg" alt=""/> 1099 Today
                    </p>
                </article>
                <article class="card youtube">
                    <p class="card-title">
                        <img src="images/icon-youtube.svg" alt=" "/> @ricardov.dev
                    </p>
                    <p class="card-followers">
                        <span class="card-followers-number">8239 </span>
                        <span class="card-followers-title">Followers</span>
                    </p>
                    <p class="card-today is-danger">
                        <img src="images/icon-down.svg" alt=""/> 144 Today
                    </p>
                </article>
            </div>
        </div>
    </section>
    )
}

export default TopCardList