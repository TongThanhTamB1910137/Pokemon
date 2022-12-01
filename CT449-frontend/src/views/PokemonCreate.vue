<template>
    <div v-if="pokemon" class="page">
        <span class="ten">THÊM POKEMON</span>
        <PokemonForm :pokemon="pokemon" @submit:pokemon="addPokemon" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import PokemonForm from "@/components/PokemonForm.vue";
import PokemonService from "@/services/pokemon.service";

export default {
    components: {
        PokemonForm,
    },
    data() {
        return {
            pokemon: [],
            message: "",
        };
    },
    methods: {
        async addPokemon(data) {
            try {
                await PokemonService.create(data);
                this.message = "Liên hệ được tạo mới thành công";

            } catch (e) {
                console.log(e);
            }
        },
    },
    created() {
        this.message = "";
    },
};
</script>
<style>
.ten {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}
</style>