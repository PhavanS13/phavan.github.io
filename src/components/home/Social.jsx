import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a
                href="https://www.instagram.com/phavankumaar/"
                className="home__social-icon"
                target="_blank">
                <i class="uil uil-instagram"></i>
            </a>

            <a
                href="https://www.linkedin.com/in/phavan-kumaar-145365214/"
                className="home__social-icon"
                target="_blank">
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/PhavanS13" 
               className="home__social-icon" 
               target="_blank">
               <i class="uil uil-github-alt"></i>
            </a>

        </div>
    )
}

export default Social