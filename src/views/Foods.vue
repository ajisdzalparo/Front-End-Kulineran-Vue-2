<template>
  <div>
    <navbar></navbar>
    <div class="container mt-5">
      <h2>Daftar <strong>Makanan</strong></h2>
      <div class="input-group mt-3">
        <input type="text" class="form-control py-2" placeholder="Search..." aria-label="Search"
        aria-describedby="basic-addon1">
        <span class="input-group-text" id="basic-addon1">
          <font-awesome-icon icon="search"></font-awesome-icon>
        </span>
      </div>
      <div class="row">
        <div class="col-md-3 mt-4" v-for="(product, index) in products" :key="index">
          <card-product :products="product"></card-product>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: 'HomeView',
  components: {
    Navbar,
    CardProduct
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    axios.get("http://localhost:3000/products")
      .then(res => {
        this.products = res.data;
      })
      .catch(err => {
        console.log("gagal mendapatkan data", err);
      })
  },
}
</script>

<style>

</style>