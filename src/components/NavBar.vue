<template>
<header class="bg-gray-300 px-8 py-4 md:flex md:justify-between">
  <div class="flex justify-between items-center">
    <div>
      <a href="#">
        <h1 class="font-light text-2xl font-mono
        text-gray-700 underline decoration-blue-600">LK</h1>
      </a>
    </div>

    <div class="md:hidden flex items-center">
      <button @click="toggleMenu" class="h-8 w-8 group">
        <span 
        :class="isOpen ? 'transition-all duration-300 ease-in-out rotate-45 \
        translate-y-2.25 group-hover:bg-red-600' : 
        'transition-all duration-300 ease-in-out group-hover:bg-gray-500'" 
        class="block w-8 h-0.5 bg-gray-700 my-1.5 "></span>
        <span 
        :class="isOpen ? 'transition-all duration-100 ease-in-out w-0' : 
        'transition-all duration-300 ease-in-out w-8 group-hover:bg-gray-500'" 
        class="block h-0.5 bg-gray-700 my-1.5"></span>
        <span 
        :class="isOpen ? 'transition duration-300 ease-in-out -rotate-45 \
        group-hover:bg-red-600 -translate-y-2.25' : 
        'transition duration-300 ease-in-out group-hover:bg-gray-500'" 
        class="block w-8 h-0.5 bg-gray-700 my-1.5"></span>
      </button>
    </div>
  </div>

  <Transition name="menuShow" :css="shouldAnimate">
    <div v-show="isOpen" class="md:!block md:h-8 md:-mt-1">
      <div class="pt-1 md:p-0 md:!flex justify-between ">
        <a class="inner block hover:transparent hover:bg-gray-400 hover:text-white
        md:hover:text-blue-600 md:hover:bg-transparent py-2 px-4 font-light
        transition duration-300 ease-in-out cursor-pointer">Projects</a>
        <a class="inner block hover:transparent hover:bg-gray-400 hover:text-white
        md:hover:text-blue-600 md:hover:bg-transparent py-2 px-4  font-light
        transition duration-300 ease-in-out cursor-pointer mt-2 md:mt-0 md:ml-8">About Me</a>
        <a class="inner block hover:transparent hover:bg-gray-400 hover:text-white
        md:hover:text-blue-600 md:hover:bg-transparent py-2 px-4 font-light
        transition duration-300 ease-in-out cursor-pointer mt-2 md:mt-0 md:ml-8">Contact</a>
      </div>
    </div>
    </Transition>
</header>

</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      shouldAnimate: false
    }
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
  opacity: 0;
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