<template>
    <div class="home-container">
        <div class="viewport">
            <div class="header">
                GETTING CLOSER TO YOUR PARTNER
            </div>
            <div class="sub-header">
                What your waiting for?
            </div>
            <div class="form">
                <a href="/login?login=true" class="button">Login</a>
                <a href="/login?login=false" class="button active">Register</a>
            </div>
        </div>
    </div>

    <div class="cards">
        <Card 
            v-for='item in card' :key='item.id'
            :title='item.title'
            :image='item.image'
        />
    </div>
</template>

<script>
import Card from '@/components/Card'
import loveIcon from '@/assets/icons/love.png'
import angryIcon from '@/assets/icons/angry.png'
import togetherIcon from '@/assets/icons/together.png'

export default {
    name: "Homa Page",
    components: {
        Card
    },
    data () {
        return {
            card: [
                {
                    'id': 1,
                    'title': 'Ceritakan Perasanmu',
                    'image': loveIcon
                },{
                    'id': 2,
                    'title': 'Jaga Perasaan Pasanganmu',
                    'image': angryIcon
                },{
                    'id': 3,
                    'title': 'Bersama Selamanya',
                    'image': togetherIcon
                }
            ]
        }
    }
}
</script>

<style>
    .home-container {
        /* The image used */
        background-image: url("~@/assets/home.jpg");

        /* Full height */
        height: 800px; 

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .viewport {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .viewport .header {
        font-size: 40pt;
        margin-bottom: 10px;
    }

    .viewport .sub-header {
        font-size: 30pt;
        margin-bottom: 10px;
    }

    .viewport .form {
        padding: 20px;
    }

    .viewport .form a {
        text-decoration: none;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        margin: 5px;
        padding: 10px;
        font-weight: bold;
    }

    .viewport .form a.button {
        border: 2px solid white;
        /* border-radius: 10px; */
    }

    .viewport .form a.button:hover {
        background-color: white;
        color: black;
    }

    .viewport .form a.active {
        background-color: white;
        color: black;
    }

    .viewport .form a.active:hover {
        background-color: rgba(0, 0, 0, 0);
        color: white;
    }

    @media screen and (max-width: 600px) {
        .home-container {
            height: 500px;
        }

        .viewport .header {
            font-size: 18pt;
        }

        .viewport .sub-header {
            font-size: 15pt;
        }
    }

    .cards {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        padding-bottom: 30px;
    }
</style>