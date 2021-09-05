<template>
    <div class="card">
        <img :src="'@/assets/icons/love.png'">
        <div class="card-header">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    computed: {
        imgShow() {
            return this.image
        }
    }
}
</script>

<style>
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        font-size: 15pt;
    }

    .card img {
        width: 180px;
        height: auto;
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;
    }

    @media screen and (max-width: 600px) {
        .cards {
            flex-direction: column;
        }

        .card img {
            width: 150px;
        }
    }
</style>