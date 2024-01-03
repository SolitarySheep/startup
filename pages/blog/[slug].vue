<script setup>
const query = gql`
  query MyQuery($slug: String!) {
    blog(where: { slug: $slug }) {
      auteur
      contenu {
        html
      }
      titre
    }
  }
`;

const article = ref();
const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
article.value = data.value.blog;
</script>

<template>
  <div class="text-justify text-neutral-600 text-3xl leading-loose">
    <h1 class="font-bold">
      {{ article.titre }}
    </h1>

    <h2 class="italic pb-8">
      {{ article.auteur }}
    </h2>

    <div v-html="article.contenu.html"></div>
  </div>
</template>
