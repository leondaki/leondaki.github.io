<template>
<Transition name="modal-animation">
    <div v-show="modalActive" 
    class="p-4 m-8 md:p-5 bg-white rounded-md 
    overflow-scroll border-2 shadow-lg border-gray-400">
      
      <img class="md:h-40 md:w-44 h-80 w-full object-cover" src="@/assets/pfp.jpg" alt="...">
      <h3 class="uppercase text-xl font-semibold pt-4">
        {{ project_detail.title }}
      </h3>
      
      <div class="md:flex md:text-justify md:space-x-8">
        <div class="border border-red-500 md:w-1/3">
        <h3 class="font-semibold mt-4">Objectives</h3>
        <p class="whitespace-pre-line text-gray-500 text-md">
          {{ project_detail.objectives }}
        </p>
        </div>

        <div class="border border-red-500 md:w-1/3">
        <h3 class="font-semibold mt-4">Methods</h3>
        <p class="whitespace-pre-line text-gray-500 text-md">
          {{ project_detail.methods }}
        </p> 
        </div>

        <div class="border border-red-500 md:w-1/3">
          <h3 class="font-semibold mt-4">Results</h3>
          <p class="whitespace-pre-line text-gray-500 text-md">
            {{ project_detail.results }}
          </p>
      </div>
    </div>

      <button @click="$emit('closeModal')"
        class="py-2 px-5 mt-4 text-sm font-medium 
        text-gray-900 hover:border-blue-600
        focus:outline-none bg-white rounded-lg border border-gray-200">
        Close
      </button>

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