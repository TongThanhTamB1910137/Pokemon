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
    <div class="row">
        <div class="col col-md-10">
            <div class="col-lg-14">
                <input type="search" class="form-control " placeholder="Nhập tên pokemon" :value="modelValue"
                    @input="updateModelValue" @keyup.enter="submit" />
            </div>
        </div>
        <div class="col-md-2">
            <select class="form-select" aria-label="Default select example" name="type" @change="changeSeleted">
                <option selected><i>Tìm theo hệ</i></option>
                <option value="grass">Grass</option>
                <option value="posion">Posion</option>
                <option value="water">Water</option>
                <option value="fire">Fire</option>
            </select>
        </div>
    </div>
</template>