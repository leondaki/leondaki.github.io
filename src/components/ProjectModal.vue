<template>
<Transition name="modal-animation">
    <div v-show="modalActive" 
    class="p-4 m-8 md:p-5 top-2
    bg-gray-100 space-y-4 rounded-md overflow-scroll">
      
        <img class="md:h-40 md:w-44 h-80 w-full object-cover" src="@/assets/pfp.jpg" alt="...">
        <h1 class="tracking-wide uppercase">{{ project_detail.title }}</h1>
        
        <h3 class="font-bold">Objectives</h3>
        <p class="whitespace-pre-line">{{ project_detail.objectives }}</p>

        <h3 class="font-bold">Methods</h3>
        <p class="whitespace-pre-line">{{ project_detail.methods }}</p> 

        <h3 class="font-bold">Results</h3>
        <p class="whitespace-pre-line">{{ project_detail.results }}</p>
        <button @click="$emit('toggleModal')"
        class="py-2 px-5 text-sm font-medium text-gray-900 hover:border-blue-600
        focus:outline-none bg-white rounded-lg border border-gray-200">Close</button>

    </div>
</Transition>
</template>


<script>
export default {
  props: {
    modalActive: {
        type: Boolean
    },
    project_detail: {
      type: Object,
      required: true
    }
  }
};
</script>