<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Delicious Food Menu</strong><br>in Your Gadget</h2>
              <p>Langsung Aja, Pilih Menu Favoritmu dan Pesan Sekarang!</p>
              <router-link class="btn btn-lg btn-warning" to="/foods">
                <font-awesome-icon icon="arrow-right"></font-awesome-icon>
                Pesan</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="100%">
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4 mb-4">
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="100%">
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Delicious Food Menu</strong><br>in Your Gadget</h2>
              <p>Langsung Aja, Pilih Menu Favoritmu dan Pesan Sekarang!</p>
              <router-link class="btn btn-lg btn-warning" to="/">
                <font-awesome-icon icon="arrow-right"></font-awesome-icon>
                Pesan Sekarang</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'hero'
}
</script>
