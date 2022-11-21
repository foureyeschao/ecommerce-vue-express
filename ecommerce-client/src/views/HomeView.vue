<template>
  <div class="grid grid--3">
    <div v-for="(product) in products" :key="product.id" class="col mb-5">
         <article class="tile" id={idProduct}>
           <div class="tile__link">
                <div class="tile__img-wrapper">
                    <img :src= product.photo alt="product_image" className="tile__img" />
                </div>
                <div class="tile__text-wrapper">
                   <h3 class="">{{product.name}}</h3>
                   <p>{{ product.description }}</p>
                   <p>{{ product.category }}</p>
                   <p class="tile__text">{{ product.price }}$</p>
                </div>
           </div>
         </article>
    </div>
  </div>
</template>

<script>
export default {
  props: ['products']
}
</script>
