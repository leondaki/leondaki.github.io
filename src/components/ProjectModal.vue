<template>
  <Transition name="modal-animation">
    <div @click="$emit('closeModal')"
    v-show="modalActive"
    class="outer fixed w-full h-full left-0 top-0 bg-gray-800 bg-opacity-70"></div>
  </Transition>
  
  <Transition name="modal-animation-inner">
     <!-- Modal Content -->
    <div v-if="modalActive" 
      class="inner p-4 sm:p-5 bg-white rounded-md 
      w-5/6 h-fit max-h-85v mx-auto my-auto overflow-scroll
      inset-x-0 inset-y-0 fixed shadow-lg">
  
      <!-- Project Title and Close Button -->
      <div class="flex justify-between items-start mb-2">
        <div class="block">
          <h3 class="text-xl sm:text-3xl font-bold">
            {{ project.title }}
          </h3>
          <h4 class="text-xl font-extralight">
            {{ project.date }}
          </h4>
        </div>
   
        <button 
          @click="$emit('closeModal')" 
          class="pb-2 group h-8 w-8">
            <span class="rotate-45 translate-y-2.25 bg-gray-400
            transition-all duration-200 ease-in-out 
            group-hover:bg-gray-700 block w-8 h-0.5 my-1.5"></span>
            <span class="-rotate-45 bg-gray-400
            transition-all duration-200 ease-in-out 
            group-hover:bg-gray-700 block w-8 h-0.5 my-1.5"></span>  
        </button>

      </div>
  
      <div class="md:flex">
        <!-- Project Pictures -->
        <ImageCarousel 
        :projectImages="project.imageUrls"
        :projectCaptions="project.imageCaptions"
        />

        <!-- Project Details -->
        <div class="mx-4 md:border-l sm:border-gray-600 mt-2">
          <div class="">
            <div class="sm:w-full sm:px-4">
              <h3 class="font-semibold">Objectives</h3>
              <p class="whitespace-pre-line text-gray-500 text-md text-justify
              sm:text-left">
                {{ project.objectives }}
              </p>
            </div>

            <div class=" sm:w-full mt-4 sm:px-4">
              <h3 class="font-semibold">Methods</h3>
              <p class="whitespace-pre-line text-gray-500 text-md text-justify
              sm:text-left">
                {{ project.methods }}
              </p> 
            </div>

            <div class=" sm:w-full mt-4 sm:px-4">
              <h3 class="font-semibold">Results</h3>
              <p v-html="project.results"
              class="whitespace-pre-line text-gray-500 text-md text-justify
              sm:text-left"></p>
            </div>
          </div>
        </div>
      </div>    
    
    </div>
  </Transition>
</template>


<script>
import ImageCarousel from './ImageCarousel.vue';

export default {
  props: {
    modalActive: {
        type: Boolean
    },
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    ImageCarousel
  }
};
</script>

<style>
/* Define the transition behavior */
.modal-animation-enter-active , 
.modal-animation-leave-active {
  transition-property: opacity;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
}

.modal-animation-enter-from ,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-enter-to, 
.modal-animation-leave-from {
  opacity: 100%;
}


.modal-animation-inner-enter-active , 
.modal-animation-inner-leave-active {
  transition-property: scale;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.modal-animation-inner-enter-from ,
.modal-animation-inner-leave-to {
  scale: 0;
}

.modal-animation-inner-enter-to, 
.modal-animation-inner-leave-from {
  scale: 100%;
}
</style>