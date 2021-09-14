<template>
    <div class="navbar">
        <div class="navbar-icon">
            <h1>Love Meter</h1>
            <a href="javascript:void(0);" class="navbtnmenu" id="navbtnmenu" onclick="humMenu()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <div class="navbar-menu" id="navbar-menu">
            <a href="/">Home</a>
            <a href="">Service</a>
            <a href="">About</a>
            <a href="/login" class="button">Login</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>
    .navbar {
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgb(253, 0, 211);
        text-decoration: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .navbar-icon {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        color: white;
    }

    .navbar-icon .navbtnmenu {
        font-size: 30px;
        color: white;
        display: none;
    }

    .navbar-menu {
        display: flex;
        flex-direction: row;
    }

    .navbar-menu a {
        text-decoration: none;
        color: white;
        padding: 10px;
        font-size: 15pt;
    }

    .navbar-menu a.button {
        border: 2px solid white;
    }

    .navbar-menu a.button:hover {
        background-color: white;
        color: black;
    }

    @media screen and (max-width: 600px) {
        .navbar-icon .navbtnmenu {
            display: block;
        }

        .navbar {
            display: flex;
            flex-direction: column;
        }

        .navbar-menu {
            display: none;
            flex-direction: column;
            top: 1;
        }
    }
</style>