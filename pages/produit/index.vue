<script setup>
const query = gql`
  query Produits {
    produits {
      description
      image {
        url
      }
      prix
      titre
      slug
    }
  }
`;

const prods = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
prods.value = data.value.produits;
</script>

<template>
  <div class="grid gap-10 grid-cols-1 md:grid-cols-3 pb-8">
    <NuxtLink :to="`/produit/${prod.slug}`" v-for="prod in prods" class="">
      <img
        :src="prod.image.url"
        alt="Image du produit"
        class="w-full h-auto rounded-t-xl transform transition-transform md:hover:scale-110 mb-4 shadow-lg"
      />

      <h2 class="text-neutral-400 text-3xl text-center pb-6">
        {{ prod.titre }}
      </h2>
    </NuxtLink>
  </div>
</template>
