import React from "react";

const signIn = () => {

    return (
        <div class="uk-flex uk-flex-center ">
            <div class="uk-text-left uk-card-body uk-tile uk-width-1-4@m">
                <h2 class="uk-flex uk-flex-center">Login</h2>
                <form>

                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
                            <input class="uk-input" type="text" placeholder="Username or E-mail"/>
                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <input class="uk-input" type="text" placeholder="Password"/>
                        </div>
                    </div>

                </form>
            </div>
            <div class="uk-text-right uk-card-body uk-tile uk-width-1-4@m">
                <h2 class="uk-flex uk-flex-center">Sign Up</h2>
                <form>

                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input class="uk-input" type="text"  placeholder="Username"/>
                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input class="uk-input" type="text"  placeholder="E-mail"/>
                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input class="uk-input" type="text"  placeholder="Confirm E-mail"/>
                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: lock"></span>
                            <input class="uk-input" type="text" placeholder="Password"/>
                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: lock"></span>
                            <input class="uk-input" type="text" placeholder=" Confirm Password"/>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default signIn