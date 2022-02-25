import React from "react";

const signIn = () => {

    return (
        <div class="">
            <h2>Sign up</h2>
            <div class="uk-flex uk-flex-row uk-flex-center">
                <form>
                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input class="uk-input" type="text" />
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <input class="uk-input" type="text" />
                        </div>
                    </div>
                </form>
                <hr class="uk-divider-vertical"></hr>
                <h2>Login</h2>
                <form>
                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input class="uk-input" type="text" />
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <input class="uk-input" type="text" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default signIn