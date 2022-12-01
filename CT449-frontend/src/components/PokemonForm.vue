<template>
    <div class="container bg-white p-3 mt-2 rounded-2 font-weight-bold">
        <Form @submit="submitPokemon" :validation-schema="pokemonFormSchema">
            <div class="form-group">
                <label for="name" class="">Tên Pokemon: </label>
                <Field name="name" type="text" class="form-control" v-model="pokemonLocal.name" />
                <ErrorMessage name="name" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="img">Hình ảnh:</label>
                <Field name="img" type="text" class="form-control" v-model="pokemonLocal.img" />
                <ErrorMessage name="img" class="error-feedback" />
            </div>
            <div class="form-group">

                <!-- <Field as="select" class="form-select" name="types" aria-label="Default select example"
                    v-model="pokemonLocal.types.type">
                    <option :value="item._id" v-for="item in types">{{ item.type }}</option>
                </Field> -->
                <div class="form-group">
                    <label for="types ">Hệ:</label>
                    <Field as="select" class="form-select" name="type" aria-label="Default select example"
                        v-model="pokemonLocal.types">
                        <option :value="item._id" v-for="item in types">{{ item.type }}</option>
                    </Field>
                    <ErrorMessage name="types" class="error-feedback" />
                </div>
                <div class="form-group">
                    <label for="number">Máu:</label>
                    <Field name="hp" type="number" class="form-control" v-model="pokemonLocal.hp" />
                    <ErrorMessage name="hp" class="error-feedback" />
                </div>
                <div class="form-group">
                    <label for="number">Tấn Công:</label>
                    <Field name="att" type="number" class="form-control" v-model="pokemonLocal.att" />
                    <ErrorMessage name="att" class="error-feedback" />
                </div>
                <div class="form-group">
                    <label for="number">Tốc độ:</label>
                    <Field name="speed" type="number" class="form-control" v-model="pokemonLocal.speed" />
                    <ErrorMessage name="speed" class="error-feedback" />
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-info">Lưu</button>
                <button v-if="pokemonLocal._id" type="button" class="ml-2 btn btn-danger" @click="deletePokemon()">
                    Xóa
                </button>
            </div>
        </Form>
    </div>
</template>
<script>
import PokemonService from "@/services/pokemon.service";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:pokemon", "delete:pokemon"],
    props: {
        pokemon: { type: Object, required: true }
    },
    data() {
        const pokemonFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(4, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            img: yup.string(),
            // types: yup.string().required(`Hệ phải có giá trị "grass","water","fire" hoặc "posion"!!`),
            att: yup
                .number(),
            hp: yup
                .number(),
            speed: yup
                .number(),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // pokemonLocal để liên kết với các input trên form
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // pokemonLocal để liên kết với các input trên form
            pokemonLocal: this.pokemon,
            pokemonFormSchema,
            types: []

        };
    },
    computed: {

    },
    methods: {
        submitPokemon() {
            this.$emit("submit:pokemon", this.pokemonLocal);
        },
        deletePokemon() {
            this.$emit("delete:pokemon", this.pokemonLocal.id);
        },
        async getAllType() {
            try {
                this.types = await PokemonService.getAllType();
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getAllType()
    }
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
    