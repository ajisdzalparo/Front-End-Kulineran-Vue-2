<template>
  <div class="cart">
    <navbar></navbar>
    <main class="container">
      <h1 class="mt-5 text-center fw-bold">My Cart</h1>

    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "cart",
  components: {
    Navbar,
  },
};
</script>

<style></style>