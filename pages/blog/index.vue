<script setup>
const query = gql`
  query Blogs {
    blogs {
      auteur
      contenu {
        html
      }
      titre
      slug
    }
  }
`;

const articles = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
articles.value = data.value.blogs;
</script>

<template>
  <div class="pt-8 pb-10">
    <NuxtLink
      :to="`/blog/${article.slug}`"
      v-for="article in articles"
      class="text-neutral-600 text-3xl text-center"
    >
      <h2
        class="hover:text-neutral-400 shadow-lg py-8 lg:mx-[200px] md:mx-[50px]"
      >
        {{ article.titre }}
      </h2>

      <!-- <div v-html="article.contenu.html"></div> -->
    </NuxtLink>
  </div>
</template>
