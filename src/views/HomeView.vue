<template>
  <div class="home">
    <navbar></navbar>
    <div class="container mt-5">
      <hero></hero>
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-warning float-end">
            <font-awesome-icon icon="eye"></font-awesome-icon>
            Lihat Semua</router-link>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-3 mt-4" v-for="(product, index) in products" :key="index">
          <card-product :products="product"></card-product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Hero,
    CardProduct
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    axios.get("http://localhost:3000/best-product")
      .then(res => {
        this.products = res.data;
      })
      .catch(err => {
        console.log("gagal mendapatkan data", err);
      })
  },
}
</script>
