<template>
  <div class="h-64 w-64 md:h-96 md:w-96 flex items-center">
      <img class="object-contain rounded-md" :src="picture">
  </div>
</template>

<script>
 
export default {
    props: {
        picture: {
            type: Object,
            required: true
        },

    }
};
</script>

