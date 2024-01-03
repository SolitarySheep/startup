<script setup>
const query = gql`
  query Equipe {
    equipes {
      nom
      description
      image {
        url
      }
    }
  }
`;

const contenuEquipe = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuEquipe.value = data.value.equipes;
</script>

<template>
  <div class="grid gap-10 grid-cols-1 md:grid-cols-2 pt-8">
    <div v-for="membre in contenuEquipe">
      <h2 class="text-neutral-400 text-5xl pb-5">{{ membre.nom }}</h2>
      <img
        :src="membre.image.url"
        alt="Image de l'équipe"
        class="rounded-t-xl shadow-lg"
      />
      <p class="text-neutral-600 text-3xl pb-8 text-justify pt-3">
        {{ membre.description }}
      </p>
    </div>
  </div>

  <!-- <div v-html="contenuEquipe.texte.html"></div> -->
</template>
