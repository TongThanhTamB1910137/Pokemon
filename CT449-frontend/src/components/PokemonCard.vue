<script>
export default {
    props: {
        pokemon: { type: Object, required: true },
    },
};

const typeColor = {
    fire: "#f0932b",
    grass: "#00b894",
    poison: "#6c5ce7",
    water: "#0190FF",
};
</script>
<template>
    <!-- <div class="rounded-2 bg-white ">
        <div class="p-1">
            <strong>Tên pokemon:</strong>
            {{ pokemon.name }}
        </div>
        <div class="p-1">
            <img :src="pokemon.img" style="height: 405px">
        </div>
        <div class="p-1">
            <strong>Máu:</strong>
            {{ pokemon.hp }}
        </div>
        <div class="p-1">
            <strong>Tấn công:</strong>
            {{ pokemon.att }}
        </div>
        <div class="p-1">
            <strong>Tốc độ:</strong>
            {{ pokemon.speed }}
        </div>
    </div> -->
    <div class="container">
        <div id="cardpk">
            <p class="hp">
                <span>HP</span>
                {{ pokemon.hp }}
            </p>
            <img :src="pokemon.img" style="height: 300px">
            <h2 class="name">{{ pokemon.name }}</h2>
            <div class="types">
                {{ pokemon.type }}
            </div>
            <div class="stats">
                <div class="att">
                    <h3>{{ pokemon.att }}</h3>
                    <p>Tấn công</p>
                </div>
                <div class="hp-2">
                    <h3>{{ pokemon.hp }}</h3>
                    <p>Máu</p>
                </div>
                <div class="speed">
                    <h3>{{ pokemon.speed }}</h3>
                    <p>Tốc độ</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
body {
    background-color: #eff3ff;
}

#cardpk {
    width: 100%;
    padding: 30px 20px;
    box-shadow: 0 50px 60px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    background-color: #ffffff;
    transition: 0.4s ease-in-out;
}

#cardpk:hover {
    margin-top: 25px;
    opacity: 1;
}


.hp {
    width: 80px;
    background: linear-gradient(135deg, #86e3ce, #d0e6a5);
    text-align: center;
    padding: 8px 0;
    border-radius: 30px;
    margin-left: auto;
    font-weight: 400;
}

.name {
    text-align: center;
    font-weight: 600;
    background: linear-gradient(135deg, #86e3ce, #d0e6a5);
    border-radius: 30px;
}

.hp span,
.types span {
    font-size: 12px;
    letter-spacing: 0.4px;
    font-weight: 600;
}

.stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
}

/* 
.hp span,
.types span {
    font-size: 12px;
    letter-spacing: 0.4px;
    font-weight: 600;
}

.types span {
    padding: 5px 20px;
    border-radius: 20px;
    color: #ffffff;
}

.stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
}

.stats p {
    color: #404060;
} */

/* #btn {
    display: block;
    padding: 15px 60px;
    font-size: 18px;
    background-color: #101010;
    color: #ffffff;
    position: relative;
    margin: 30px auto;
    border: none;
    border-radius: 5px;
} */
</style>
