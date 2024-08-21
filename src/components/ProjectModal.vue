<template>
<Transition name="modal-animation">

  <div v-show="modalActive" 
  class="p-4 m-8 md:p-5 bg-white rounded-md overflow-auto 
  w-5/6 h-5/6 mx-auto my-auto inset-x-0 inset-y-0 fixed top-0 shadow-lg">
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-xl font-normal">
        {{ project_detail.title }}
      </h3>

      <button 
      @click="$emit('closeModal')" 
      class="pb-2 block group h-8 w-8">
        <span class="rotate-45 translate-y-2.25 bg-gray-400
        transition-all duration-200 ease-in-out 
        group-hover:bg-gray-700 block w-8 h-0.5 my-1.5 "></span>
        <span class="-rotate-45 bg-gray-400
        transition-all duration-200 ease-in-out 
        group-hover:bg-gray-700 block w-8 h-0.5 my-1.5 "></span>  
      </button>
      </div>
    <div class="md:flex">
    
      <figure class="flex-shrink-0 mb-4 md:mb-0">
        <img 
        class="w-full h-96 object-cover rounded-lg shadow-lg" 
        :src="project_detail.imageUrl" 
        :alt="project_detail.title">
        <figcaption class="text-center mt-2">
          Figure 1. <span class="italic">Overview of Free Return Trajectory</span>
        </figcaption>
      </figure>

      <div class="mx-4">
        <div class="md:mt-0">
          <div class="md:w-full px-4">
            <h3 class="font-semibold">Objectives</h3>
            <p class="whitespace-pre-line text-gray-500 text-md">
              {{ project_detail.objectives }}
            </p>
          </div>

          <div class=" md:w-full mt-4 md:mt-0 px-4">
          <h3 class="font-semibold">Methods</h3>
          <p class="whitespace-pre-line text-gray-500 text-md">
            {{ project_detail.methods }}
          </p> 
          </div>

          <div class=" md:w-full mt-4 md:mt-0 px-4">
            <h3 class="font-semibold">Results</h3>
            <p class="whitespace-pre-line text-gray-500 text-md">
              {{ project_detail.results }}
            </p>
        </div>
        </div>
    </div>
    </div>
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