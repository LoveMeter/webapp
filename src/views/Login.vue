<template>
        <div class="hero">
            <div class="form-box">
            
                <div class="button-box">
                    <div id="btn" :style="[ isLogin ? {'left': '0px'}:{'left': '110px'} ]"></div>
                    <button type="button" class="toggle-btn" v-on:click="login">Log in</button>
                    <button type="button" class="toggle-btn" v-on:click="register">Register</button>
                </div>

                <div class="social-icons">
                    <img src="@/assets/icons/facebook.png">
                    <img src="@/assets/icons/twitter.png">
                    <img src="@/assets/icons/google.png">
                </div>
                
                <form id="login" class="input-group"
                    :style="[ isLogin ? {'left': '50px'}:{'left': '-400px'} ]"
                >
                    <input type="text" class="input-field" placeholder="Username" required>
                    <input type="text" class="input-field" placeholder="Password" required>
                    <input type="checkbox" class="check-box"><span>Remember Password</span>
                    <button type="submit" class="submit-btn">Log in</button>
                </form>

                <form id="register" class="input-group"
                    :style="[ isLogin ? {'left': '450px'}:{'left': '50px'} ]"
                >
                    <input type="text" class="input-field" placeholder="Username" required>
                    <input type="email" class="input-field" placeholder="Email" required>
                    <input type="text" class="input-field" placeholder="Password" required>
                    <input type="checkbox" class="check-box"><span>I agree to the terms conditions</span>
                    <button type="submit" class="submit-btn">Register</button>
                </form>

            </div>
        </div>
</template>

<script>
export default {
    name: "Login Page",
    methods: {
        login() {
            this.isLogin = true
        },
        register() {
            this.isLogin = false
        }
    },
    data() {
        return {
            isLogin: (this.$route.query.login === "true")
        }
    }
}
</script>

<style>
    .hero {
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
        position: relative;
    }

    .form-box {
        width: 380px;
        height: 480px;
        position: relative;
        margin: 6% auto;
        background: #fff;
        padding: 5px;
        overflow: hidden;
        box-shadow: 0 0 20px 9px #ff61241f;
    }

    .button-box {
        width: 220px;
        margin: 35px auto;
        position: relative;
        box-shadow: 0 0 20px 9px #ff61241f;
        border-radius: 30px;
    }

    .toggle-btn {
        padding: 10px 30px;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        outline: none;
        position: relative;
    }

    #btn {
        top: 0;
        left: 0;
        position: absolute;
        width: 110px;
        height: 100%;
        background: linear-gradient(to right, #ff00aa, rgb(253, 0, 211));
        border-radius: 30px;
        transition: .5s;
    }

    .social-icons {
        margin: 30px auto;
        text-align: center;
    }

    .social-icons img {
        width: 30px;
        margin: 0 12px;
        box-shadow: 0 0 20px 0 #7f7f7f3d;
        cursor: pointer;
        border-radius: 50%;
    }

    .input-group {
        top: 180px;
        position: absolute;
        width: 280px;
        transition: .5s;
    }

    .input-field {
        width: 100%;
        padding: 10px 0;
        margin: 5px 0;
        border-left: 0;
        border-top: 0;
        border-right: 0;
        border-bottom: 1px solid #999;
        outline: none;
        background: transparent;
    }

    .submit-btn {
        width: 85%;
        padding: 10px 30px;
        cursor: pointer;
        display: block;
        margin: auto;
        background: linear-gradient(to right, #ff00aa, rgb(253, 0, 211));
        border: 0;
        outline: none;
        border-radius: 30px;
    }

    .check-box {
        margin: 30px 10px 30px 0;
    }

    span {
        color: #777;
        font-size: 12px;
        bottom: 68px;
        position: absolute;
    }

    #login {
        left: 50px;
    }

    #register {
        left: 450px;
    }
</style>