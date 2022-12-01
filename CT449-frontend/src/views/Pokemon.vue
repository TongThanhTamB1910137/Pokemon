<template>
    <div class="page row">
        <div class="col-lg-12 mt-5">
            <InputSearch v-model="searchText" @change-selected="handleSeleted" />
        </div>
        <div class="mt-3 col-md-6">
            <h4 class="tilte1">
                Danh sách Pokemon
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png">
            </h4>

            <PokemonList v-if="filteredPokemonsCount > 0" :pokemons="filteredPokemons"
                v-model:activeIndex="activeIndex" />

            <p v-else>Không có Pokemon nào.</p>

            <div class="mt-1 d-flex justify-content-around align-items-center">
                <button class="btn btn-sm btn-info" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
                <button class="btn btn-sm btn-success" @click="goToAddPokemon()">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>
                <button class="btn btn-sm btn-danger" @click="removeAllPokemons()">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activePokemon">
                <h4 class="tilte">
                    Chi tiết Pokemon
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/card-games-colored/48/Games_CardGames_Artboard_23-512.png">
                </h4>
                <PokemonCard :pokemon="activePokemon" />
                <router-link :to="{
                    name: 'pokemon.edit',
                    params: { id: activePokemon._id },
                }">
                    <div>
                        <button class="btn mt-2 btn-hmm " type="button">
                            <i class="fas fa-edit"></i> Hiệu chỉnh
                        </button>
                    </div>
                </router-link>

            </div>
        </div>
    </div>
</template>
<script>
import PokemonCard from "@/components/PokemonCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import PokemonList from "@/components/PokemonList.vue";
import PokemonService from "@/services/pokemon.service.js";
export default {
    components: {
        PokemonCard,
        InputSearch,
        PokemonList,

    },
    data() {
        return {
            pokemons: [],
            activeIndex: -1,
            searchText: "",
            type: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng Pokemon thành chuỗi để tiện cho tìm kiếm.
        PokemonStrings() {
            return this.pokemons.map((pokemon) => {
                const { name, img, types, att, hp, speed } = pokemon;
                return [name, img, types, att, hp, speed].join("");
            });
        },
        // Trả về các pokemon có chứa thông tin cần tìm kiếm.
        filteredPokemons() {
            if (this.searchText) {
                return this.pokemons.filter((_pokemon, index) =>
                    this.PokemonStrings[index].includes(this.searchText)
                )
            }
            if (this.type) {
                return this.pokemons.filter((_pokemon, index) =>
                    this.type == _pokemon.types.type
                )
            }
            return this.pokemons;
        },
        activePokemon() {
            if (this.activeIndex < 0) return null;
            return this.filteredPokemons[this.activeIndex];
        },
        filteredPokemonsCount() {
            return this.filteredPokemons.length;
        },
    },
    methods: {
        handleSeleted(value) {
            this.type = value
        },
        async retrievePokemons() {
            try {
                this.pokemons = await PokemonService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.type = '';
            this.searchText = ''
            this.retrievePokemons();
            this.activeIndex = -1;
        },
        async removeAllPokemons() {
            if (confirm("Bạn muốn xóa tất cả Pokemon không???")) {
                try {
                    await PokemonService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddPokemon() {
            this.$router.push({
                name: "pokemon.add",
            });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style scoped>
.btn-outline-dark {

    background: #76BB68;
}

.btn-hmm {
    font-weight: bold;
    background: #F07F5E;
}

.btn-danger {
    background: #B22B27;
}

.page {
    text-align: center;
    max-width: 1200px;
}

.tilte {
    font-weight: bold;
    border-radius: 20px 0;
    width: 100%;
    /* background-color: rgb(250, 194, 40); */
    background-color: #FFA535;
    font-weight: 600px;
    box-shadow: 0 50px 60px rgba(0, 0, 0, 0.15);

}

.tilte1 {
    font-weight: bold;
    border-radius: 0px 20px;
    width: 100%;
    background-color: #FFA535;
    font-weight: 600px;
    box-shadow: 0 50px 60px rgba(0, 0, 0, 0.15);

}

.tilte img {
    width: 50px;
    height: 60px;

}

.tilte1 img {
    width: 50px;
    height: 60px;

}
</style>
    