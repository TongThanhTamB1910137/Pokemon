<script>
export default {
    props: {
        pokemons: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<template>
    <div class="list-group list-group-flush hover-overlay">
        <a class="list-group-item rounded mb-1 hover-1" v-for="(pokemon, index) in pokemons" :key="pokemon._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ pokemon.name }}
        </a>
    </div>
</template>
<style>
.hover-overlay a {
    text-decoration: none;
    background-color: whitesmoke;
}
</style>