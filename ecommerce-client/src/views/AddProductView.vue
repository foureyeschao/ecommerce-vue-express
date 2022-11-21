<template>
  <section class="">
   <form action="" class="add-form">
     <div class="form-control">
       <label for="">Product Name: </label>
       <input type="text">
     </div>
     <div class="form-control">
       <label for="">Product Photos: </label>
       <input type="text">
     </div>
     <div class="form-control">
       <label for="">Product Price: </label>
       <input type="text">
     </div>
     <div class="form-control">
       <label for="">Product Category: </label>
       <input type="text">
     </div>
     <div class="form-control">
       <label for="">Product Description: </label>
       <input type="text">
     </div>
     <input type="submit" class="btn btn-block" value="Save product"/>
   </form>

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
  </section>
</template>
<script>
export default {
  props: ['products']
}
</script>
