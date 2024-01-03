<script setup>
const query = gql`
  query MyQuery($slug: String!) {
    produit(where: { slug: $slug }) {
      description
      prix
      image {
        url
      }
      titre
    }
  }
`;

const prod = ref();
const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
prod.value = data.value.produit;
</script>

<template>
  <div class="md:flex pb-10">
    <img
      :src="prod.image.url"
      alt="Image du produit"
      class="md:w-1/2 w-full h-auto rounded-t-xl shadow-lg"
    />

    <div class="pt-6 md:pl-6 md:pt-0">
      <h2 class="text-neutral-400 text-5xl text-justify pb-6">
        {{ prod.titre }}
      </h2>

      <p class="pb-6 text-neutral-600 text-3xl text-justify">
        {{ prod.description }}
      </p>

      <p class="text-neutral-400 font-bold text-3xl text-justify">
        {{ prod.prix }}€
      </p>
    </div>
  </div>
</template>
