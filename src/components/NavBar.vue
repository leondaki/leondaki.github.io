<template>
<header class="bg-gray-300 px-8 py-4 md:flex md:justify-between">
  <div class="flex justify-between items-center">
    <div>
      <a href="#">
        <h1 class="font-light text-3xl font-monotext-gray-700 
        hover:text-blue-600 transition duration-300 ease-in-out">LK</h1>
      </a>
    </div>

    <div class="md:hidden flex items-center">
      <button @click="toggleMenu" class="h-8 w-8 group">
        <span 
        :class="isOpen ? 'transition-all duration-300 ease-in-out rotate-45 \
        translate-y-2.25 group-hover:bg-red-600' : 
        'transition-all duration-300 ease-in-out group-hover:bg-blue-600'" 
        class="block w-8 h-0.5 bg-gray-700 my-1.5 "></span>
        <span 
        :class="isOpen ? 'transition-all duration-100 ease-in-out w-0' : 
        'transition-all duration-300 ease-in-out w-8 group-hover:bg-blue-600'" 
        class="block h-0.5 bg-gray-700 my-1.5"></span>
        <span 
        :class="isOpen ? 'transition duration-300 ease-in-out -rotate-45 \
        group-hover:bg-red-600 -translate-y-2.25' : 
        'transition duration-300 ease-in-out group-hover:bg-blue-600'" 
        class="block w-8 h-0.5 bg-gray-700 my-1.5"></span>
      </button>
    </div>
  </div>

  <Transition name="menuShow" :css="shouldAnimate">
    <div v-show="isOpen" class="md:!flex md:h-8">
      <div class="pt-2 md:p-0 md:!flex md:space-x-8 justify-between">

        <div class="inner flex items-center
        hover:border-gray-500 hover:rounded-md 
        border border-transparent md:hover:border-transparent hover:text-blue-600
        cursor-pointer transition-all duration-200 ease-in-out">
            <a href="#projects" class="block font-light 
            py-2 px-4">Projects</a>
        </div>
       
        <div class="inner flex items-center
        hover:border-gray-500 hover:rounded-md 
        border border-transparent md:hover:border-transparent hover:text-blue-600
        cursor-pointer transition-all duration-200 ease-in-out">
            <a href="#aboutMe" class="block font-light 
            py-2 px-4">About Me</a>
        </div>
       
        <div class="inner flex items-center
        hover:border-gray-500 hover:rounded-md 
        border border-transparent md:hover:border-transparent hover:text-blue-600
        cursor-pointer transition-all duration-200 ease-in-out">
            <a href="#contactMe" class="block font-light 
            py-2 px-4">Contact</a>
        </div>  
        </div>     
      </div>
    </Transition>
</header>

</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const isOpen = ref(false)
    const shouldAnimate = ref(false)

    return { isOpen, shouldAnimate };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    toggleMenu() {
       this.isOpen = !this.isOpen
       this.shouldAnimate = true;
    },
    checkScreenSize() {
      if (window.innerWidth > 768) {
        this.isOpen = false;
        this.shouldAnimate = false;
      }
    }
  }
}
</script>

<style>
/* Define the transition behavior */
.menuShow-enter-active, 
.menuShow-leave-active {
  transition-property: max-height;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
}

.menuShow-enter-active .inner,
.menuShow-leave-active .inner {
  transition-property: opacity, margin-left;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out
}

.menuShow-enter-from .inner,
.menuShow-leave-to .inner {
  opacity: 0%;
  margin-left: -40px; 
}

.menuShow-enter-to .inner, 
.menuShow-leave-from .inner{
  opacity: 100%;
}

.menuShow-enter-from ,
.menuShow-leave-to {
  max-height: 0px;
}

.menuShow-enter-to , 
.menuShow-leave-from {
  max-height: 600px;
}
</style>