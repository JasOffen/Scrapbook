import React from "react";

const Navbar = () => {

    return (
        <nav class="uk-navbar-container uk-margin uk-navbar-transparent" uk-navbar=''>

            <div class="nav-overlay uk-navbar-left">

                <a class="uk-navbar-item uk-logo" href="./">Scrapbook</a>

            </div>

            <div class="nav-overlay uk-navbar-right">

                <ul class="uk-navbar-nav">
                    <a class="uk-navbar-toggle" uk-search-icon='' uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
                    <li><a href="/signin">Sign-in</a></li>
                </ul>

            </div>

            <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>

                <div class="uk-navbar-item uk-width-expand">
                    <form class="uk-search uk-search-navbar uk-width-1-1">
                        <input class="uk-search-input" type="search" placeholder="Search" autofocus />
                    </form>
                </div>

                <a class="uk-navbar-toggle" uk-close='' uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>

            </div>

        </nav>
    )
}

export default Navbar;