<script setup>
const query = gql`
  query Page {
    page(where: { slug: "contact" }) {
      id
      slug
      createdAt
      titre
      texte {
        html
      }
    }
  }
`;

const contenuContact = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuContact.value = data.value.page;
</script>

<template>
  <h2 class="text-3xl text-neutral-600 pb-10 text-justify">
    {{ contenuContact.titre }}
  </h2>

  <!-- <div v-html="contenuContact.texte.html">
  </div> -->

  <div class="bg-neutral-100">
    <div class="container mx-auto py-6">
      <div class="md:flex">
        <form class="md:w-1/2 bg-white rounded-lg px-6 py-8 shadow-md">
          <div class="mb-4">
            <label
              class="block text-neutral-700 font-bold mb-2 text-2xl"
              for="name"
              >Nom</label
            >
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline text-2xl"
              id="name"
              type="text"
              placeholder="Entrer votre Nom"
            />
          </div>
          <div class="mb-4 text-2xl">
            <label class="block text-neutral-700 font-bold mb-2" for="email"
              >Mail</label
            >
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline text-2xl"
              id="email"
              type="email"
              placeholder="Entrer votre email"
            />
          </div>
          <div class="mb-4 text-2xl">
            <label class="block text-neutral-700 font-bold mb-2" for="message"
              >Message</label
            >
            <textarea
              class="appearance-none border rounded w-full py-2 px-3 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline text-2xl"
              id="message"
              rows="6"
              placeholder="Entrer votre message"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xl"
              type="button"
            >
              Envoyer
            </button>
          </div>
        </form>
        <div class="md:pl-20 pt-10 md:pt-0">
          <p class="text-3xl font-bold text-neutral-400">Adresse</p>
          <p class="text-3xl text-neutral-600 pt-2">
            Rue du rodent, 29
            <br />
            1793 Espèces de Rongeurs
          </p>

          <p class="text-3xl font-bold text-neutral-400 pt-6">Mail</p>
          <p class="text-3xl text-neutral-600 pt-2">nature.hamster@gmail.com</p>

          <p class="text-3xl font-bold text-neutral-400 pt-6">Téléphone</p>
          <p class="text-3xl text-neutral-600 pt-2">0460.60.60.60</p>
        </div>
      </div>
    </div>
  </div>
</template>
