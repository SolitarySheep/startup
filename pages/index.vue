<script setup>
const query = gql`
  query Pages {
    page(where: { slug: "accueil" }) {
      id
      slug
      publishedAt
      createdAt
      titre
      texte {
        html
      }
    }
  }
`;

const contenuAccueil = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuAccueil.value = data.value.page;
</script>

<template>
  <h2 class="text-5xl pb-8 text-justify text-neutral-400">
    {{ contenuAccueil.titre }}
  </h2>

  <div
    class="text-3xl leading-loose text-justify text-neutral-600 pb-8"
    v-html="contenuAccueil.texte.html"
  ></div>

  <!-- AJOUTER UNE IMAGE A DROITE  -->
</template>
