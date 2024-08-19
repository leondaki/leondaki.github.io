<template>
<header class="bg-gray-300 py-2 px-8 md:flex md:justify-between items-center">
  <div class="flex justify-between mt-2">
    <div>
      <a href="#" class="flex items-center">
        <h1 class="font-light text-2xl font-mono underline decoration-blue-600">LK</h1>
      </a>
    </div>

    <div class="md:hidden">
      <button @click="isOpen = !isOpen" class="h-8 w-8 group">
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

  <!-- <div :class="isOpen ? 'max-h-60 transition-all duration-500 ease-in-out pb-2' : 
  'max-h-0 transition-all duration-300 ease-in-out opacity-0'"  -->
  <Transition name="menuShow">
    <div v-show="isOpen" class="outer mt-2 pb-4 md:flex md:p-0">
      <a class="inner block hover:transparent hover:bg-gray-400
      md:hover:text-blue-600 md:hover:bg-transparent p-2 rounded-md -ml-2
      transition duration-300 ease-in-out cursor-pointer">Projects</a>
      <a class="inner block hover:transparent hover:bg-gray-400 
      md:hover:text-blue-600 md:hover:bg-transparent p-2 rounded-md -ml-2
      transition duration-300 ease-in-out cursor-pointer mt-2 md:mt-0 md:ml-8">About Me</a>
      <a class="inner block hover:transparent hover:bg-gray-400 
      md:hover:text-blue-600 md:hover:bg-transparent p-2 rounded-md -ml-2
      transition duration-300 ease-in-out cursor-pointer mt-2 md:mt-0 md:ml-8">Contact</a>
      </div>
    </Transition>
</header>

</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
    }
  }
}
</script>

<style>
/* Define the transition behavior */
.menuShow-enter-active, 
.menuShow-leave-active {
  transition: max-height 0.3s ease-in-out;
}

.menuShow-enter-active .inner,
.menuShow-leave-active .inner {
  transition: opacity 0.1s ease-in-out;
  transition-delay: 0.1s;
}

.menuShow-enter-from .inner,
.menuShow-leave-to .inner {
  opacity: 0;
}

.menuShow-enter-to .inner, 
.menuShow-leave-from .inner{
  opacity: 1;
}

.menuShow-enter-from,
.menuShow-leave-to {
  max-height: 0;
}

.menuShow-enter-to, 
.menuShow-leave-from {
  max-height: 200px; /* Adjust based on the expected height of the menu */
}
</style>