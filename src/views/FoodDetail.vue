<template>
 <div class="food-detail">
  <navbar></navbar>
  <div class="container">

   <!-- Breadcrumb -->
   <div class="row mt-5">
    <div class="col">
     <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
       <li class="breadcrumb-item">
        <router-link to="/" class="text-dark text-decoration-none">Home</router-link>
       </li>
       <li class="breadcrumb-item"><router-link to="/foods" class="text-dark text-decoration-none">Foods</router-link>
       </li>
       <li class="breadcrumb-item active" aria-current="page">
        Food Order
       </li>
      </ol>
     </nav>
    </div>
   </div>

   <div class="row mt-3">
    <div class="col-md-6">
     <img :src="'../assets/images/' + product.image" :alt="product.name" class="img-fluid shadow">
    </div>
    <div class="col-md-6">
     <h2><strong>{{ product.name }}</strong></h2>
     <hr>
     <h4>Harga : <strong>Rp. {{ product.price }}</strong></h4>
     <form class="mt-4" @submit.prevent>
      <div class="form-group mb-3">
       <label class="form-label" for="jumlah_pemesanan">Jumlah Pesanan</label>
       <input id="jumlah_pemesanan" type="number" class="form-control" v-model="cart.jumlah_pemesanan" placeholder="1">
      </div>
      <div class="form-group mb-3">
       <label class="form-label" for="keterangan">Keterangan</label>
       <textarea id="keterangan" class="form-control" placeholder="Keterangan spt: Pedas, Nasi setengah, .." v-model="cart.keterangan"></textarea>
      </div>

      <button type="submit" @click="pemesanan" class="btn btn-warning"><font-awesome-icon
        icon="cart-shopping"></font-awesome-icon> Pesan</button>
     </form>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
 name: "food-detail",
  data() {
   return {
    product: {},
    cart: {}
   }
  },
  components: {
    Navbar,
 },
 methods: {
  pemesanan() {
   this.cart.product = this.product;
   const quantity = this.cart.jumlah_pemesanan;
   if (quantity && quantity != 0) {
    axios
     .post("http://localhost:3000/carts", this.cart)
     .then(() => {
      this.$router.push({ path: "/cart" })
      this.$toast.success("The order has been save in your cart", {
       type: 'success',
       position: 'top-right',
       duration: 3000,
       dismissible: true
      })
     })
     .catch((err) => console.log(err));
   } else {
    this.$toast.error("The order quantity must be filled in", {
     type: 'error',
     position: 'top-right',
     duration: 3000,
     dismissible: true
    })
   }
  }
 },
 mounted() {
  axios
   .get("http://localhost:3000/products/" + this.$route.params.id)
   .then((res) => { this.product = res.data })
   .catch(err => {
    console.log("gagal mendapatkan data", err);
   })
  }
};
</script>

<style>
.breadcrumb-item.active {
 font-weight: bold;
 color: black;
}
.img-fluid {
 border-radius: 15px;
}
</style>