<script setup>
const query = gql`
  query Hamsters {
    hamsters {
      description
      nom
      slug
      image {
        url
        width
      }
    }
  }
`;

const hams = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
hams.value = data.value.hamsters;
</script>

<template>
  <p class="text-3xl text-neutral-600 pb-10 text-justify">
    Si vous êtes intéressez par l'un de nos hamsters et que vous souhaitez en
    savoir davantage sur la procédure d'adoption
    <NuxtLink
      to="/contact"
      class="underline underline-offset-2 hover:text-neutral-400"
      >contactez-nous</NuxtLink
    >.
  </p>
  <div class="grid gap-10 grid-cols-1 md:grid-cols-3 pb-8">
    <NuxtLink :to="`/hamster/${ham.slug}`" v-for="ham in hams" class="">
      <h2 class="text-neutral-400 text-3xl text-center pb-6">
        {{ ham.nom }}
      </h2>

      <img
        :src="ham.image.url"
        :width="ham.image.width"
        alt="Image du hamster"
        class="w-full h-auto rounded-full transform transition-transform md:hover:scale-110 mb-4 shadow-lg"
      />
    </NuxtLink>
  </div>
</template>
