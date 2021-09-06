<template>
    <div class="footer">
        <div class="containers">
            <div class="container">
                <h1>Media Sosial</h1>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <a href="">Tik Tok</a>
                <a href="">-</a>
            </div>

            <div class="container">
                <h1>Contact Us</h1>
                <a href="">Github</a>
                <a href="">Whatsapp</a>
                <a href="">Telegram</a>
                <a href="">-</a>
            </div>
        </div>

        <div class="copyright">
            <h1>Love Meter By Safrudin -</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style>
    .footer {
        background-color: #242424;
        padding: 30px;
        color: white;
        display: flex;
        flex-direction: column;
    }

    .footer .containers {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .footer .container {
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    .footer .container h1 {
        font-size: 20pt;
    }

    .footer .container a {
        text-decoration: none;
        color: white;
        margin: 5px;
    }

    .footer .copyright {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .footer .copyright h1 {
        font-size: 15pt;
    }

    @media screen and (max-width: 600px) {
        .footer .containers {
            flex-direction: column;
        }
    }
</style>