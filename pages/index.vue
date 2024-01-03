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
  <div>
    <div
      class="md:absolute md:top-[50vh] md:right-[50vh] md:rotate-90 md:opacity-25 opacity-0"
    >
     <img
            src="/assets/images/leaf-fill.svg"
            alt="Image du logo"
            class="10px md:w-[600px]" 
            height="auto"
          />
    </div>

    <!-- <div
      class="md:absolute md:top-[700px] md:right-[300px] md:text-[#61B558] md:text-[500px] md:rotate-[280deg] md:transform md:scale-x-[-1] md:opacity-25 opacity-0"
    >
      <i class="ri-leaf-fill"></i>
    </div> -->

    <h2 class="text-5xl mb-10 text-justify text-neutral-400">
      {{ contenuAccueil.titre }}
    </h2>
  </div>

  <div
    class="text-3xl leading-loose text-justify text-neutral-600 pb-8"
    v-html="contenuAccueil.texte.html"
  ></div>
</template>
