<template>
  <div class="card shadow card-product">
    <img :src="'assets/images/' + products.image" class="card-img-top" :alt="products.name">
    <div class="card-body">
      <h5 class="card-title">{{ products.name }}</h5>
      <p class="card-text">Rp. {{ products.price }}</p>
      <router-link class="btn btn-warning" :to="'food/'+ products.id">
        <font-awesome-icon icon="cart-shopping"></font-awesome-icon>
        Pesan</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-product",
  props: ["products"],
}
</script>

<style>

</style>