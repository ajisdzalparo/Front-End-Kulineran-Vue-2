<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">Kulineran</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/foods">Foods</router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link my-auto" to="/cart">Keranjang
            <font-awesome-icon icon="bag-shopping"></font-awesome-icon>
            <span class="badge text-bg-warning ms-2">{{ jumlah_pesanan.length }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
export default {
  name: "navbar",
  data() {
    return {
      jumlah_pesanan: [],
    }
  },
  mounted() {
    axios.get("http://localhost:3000/carts")
      .then(res => {
        this.jumlah_pesanan = res.data;
      })
      .catch(err => {
        console.log("gagal mendapatkan data", err);
      })
  }
};
</script>
