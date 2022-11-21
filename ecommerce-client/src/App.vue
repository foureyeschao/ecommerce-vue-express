<template>
  <header class='header text-center'>
    <a href="" class=''><img src="./assets/furniture-logo.svg" alt="" /></a>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to='/'>Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to='/add-product'>Product</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Contact</a>
      </li>
    </ul>
  </header>
  <router-view :products="products" />
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  data () {
    return {
      products: []
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.products = response.data
        console.log(response.data)
      })
  }
}
</script>
