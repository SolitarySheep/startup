<script setup>
const query = gql`
  query MyQuery($slug: String!) {
    hamster(where: { slug: $slug }) {
      description
      nom
      image {
        url
        width
      }
    }
  }
`;

const ham = ref();
const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
ham.value = data.value.hamster;
</script>

<template>
  <div class="pb-10">
    <h2 class="text-neutral-400 text-5xl text-center pb-6">
      {{ ham.nom }}
    </h2>

    <div class="md:flex">
      <img
        :src="ham.image.url"
        :width="ham.image.width"
        alt="Image du hamster"
        class="md:w-1/2 w-full h-auto rounded-t-xl shadow-lg"
      />

      <p class="pt-6 md:pl-6 md:pt-0 text-neutral-600 text-3xl text-justify">
        {{ ham.description }}
      </p>
    </div>

    <!-- <div v-html="ham"></div> -->
  </div>
</template>
