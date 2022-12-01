<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        changeSeleted(e) {
            this.$emit("change-selected", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
};
</script>
<template>
    <div class="container">
        <div class="row navbar-expand-md bg-warning ">
            <div class="col-3">
                <router-link :to="{ name: 'pokemon' }" class="nav-link">
                    <a class="pk">
                        POKEMON
                        <img src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokeball_icon-icons.com_67533.png"
                            class="img1">
                    </a>
                </router-link>
            </div>
            <!-- <div class="col-4 collapse navbar-collapse">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Nhập tên Pokemon" aria-label="Search"
                        :value="modelValue" @input="updateModelValue" @keyup.enter="submit">
                    <div class="">
                        <select class="form-select" aria-label="Default select example" name="type"
                            @change="changeSeleted">
                            <option selected><i>Tìm theo hệ</i></option>
                            <option value="grass">Grass</option>
                            <option value="posion">Posion</option>
                            <option value="water">Water</option>
                            <option value="fire">Fire</option>
                        </select>
                    </div>
                </form>
            </div> -->
        </div>
    </div>
</template>
<style>
.img1 {
    width: 40px;
    margin-right: 5px;
}

.pk {
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;

}
</style>

<!-- <nav class="navbar-expand-md bg-warning">
    <router-link :to="{ name: 'pokemon' }" class="nav-link">
        <a class="navbar-brand">Pokemon
            <img src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokeball_icon-icons.com_67533.png"
                class="img1">
        </a>
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    <div class="row juts">
        <div class="col-md-6">
            <div class="col-lg-14">
                <input type="search" class="form-control " placeholder="Nhập tên pokemon" :value="modelValue"
                    @input="updateModelValue" @keyup.enter="submit" />
            </div>
        </div>
        <div class="col-md-6">
            <select class="form-select" aria-label="Default select example" name="type" @change="changeSeleted">
                <option selected><i>Tìm theo hệ</i></option>
                <option value="grass">Grass</option>
                <option value="posion">Posion</option>
                <option value="water">Water</option>
                <option value="fire">Fire</option>
            </select>
        </div>
    </div> -->
<!-- </nav> -->