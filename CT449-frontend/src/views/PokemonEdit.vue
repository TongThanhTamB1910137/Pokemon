<template>
    <div v-if="pokemon" class="page">
        <img src="/pokemon.png" class="img">
        <PokemonForm :pokemon="pokemon" @submit:pokemon="updatePokemon" @delete:pokemon="deletePokemon" />
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
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            pokemon: null,
            message: "",
        };
    },
    methods: {
        async getPokemon(id) {
            try {
                this.pokemon = await PokemonService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updatePokemon(data) {
            try {
                await PokemonService.update(this.pokemon._id, data);
                this.message = "Pokemon được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        async deletePokemon() {
            if (confirm("Bạn muốn xóa Pokemon này không?")) {
                try {
                    await PokemonService.delete(this.pokemon._id);
                    this.$router.push({ name: "pokemon" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getPokemon(this.id);
        this.message = "";
    },
};
</script>
<style>
.img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

}
</style>