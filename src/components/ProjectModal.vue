<template>
  <Transition name="modal-animation">
    <div 
    v-show="modalActive"
    class="outer fixed w-full h-full left-0 top-0 bg-gray-800 bg-opacity-70"></div>
  </Transition>

  <Transition name="modal-animation-inner">
     <!-- Modal Content -->
    <div v-if="modalActive" 
      class="inner bg-white 
      overflow-scroll 
      inset-x-0 inset-y-0 fixed ">
  
      <!-- Project Title and Close Button -->
      <div class="flex fixed justify-between py-4 px-8 w-full
      bg-gray-200 z-10 ">
        <!--Title and Date-->
        <div class="block">
          <h3 class="text-xl md:text-3xl font-bold">
            {{ project.title }}
          </h3>
          <h4 class="text-md md:text-xl font-extralight">
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
  
      <!-- Project Picturs and Details -->
      <div class="md:flex md:px-28 mt-40 mb-36">
        <!-- Project Pictures -->
        <ImageCarousel 
        :projectImages="project.imageUrls"
        :projectCaptions="project.imageCaptions"
        />

        <!-- Project Details -->
        <div class="mx-4 mt-2 md:mt-0">
          <div class="">
            <div class="sm:w-full px-4">
              <h3 class="font-semibold md:text-xl ">Objectives</h3>
              <p class="whitespace-pre-line text-gray-500 text-md 
              lg:text-left md:text-lg  sm:text-justify">
                {{ project.objectives }}
              </p>
            </div>

            <div class=" sm:w-full mt-4 md:mt-8 px-4">
              <h3 class="font-semibold md:text-xl ">Methods</h3>
              <p class="whitespace-pre-line text-gray-500 text-md 
              lg:text-left md:text-lg sm:text-justify">
                {{ project.methods }}
              </p> 
            </div>

            <div class=" sm:w-full mt-4 md:mt-8 px-4">
              <h3 class="font-semibold md:text-xl ">Results</h3>
              <p v-html="project.results"
              class="whitespace-pre-line text-gray-500 text-md 
              lg:text-left md:text-lg sm:text-justify"></p>
            </div>
          </div>
        </div>
      </div>   

     <!--Close Modal Button-->
      <div class="flex fixed bottom-0 
      bg-gray-200 justify-between p-4 w-full">
          <button 
            @click="$emit('closeModal')" 
            class="py-2 px-4 border mx-auto 
             bg-black hover:bg-gray-800 text-white
            transition ease-in-out duration-200
            rounded-md">
              Close
          </button>
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