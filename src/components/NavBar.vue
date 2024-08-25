<template>

<header 
ref="navBar" 
class=" w-full top-0 z-20 bg-gray-200 dark:bg-zinc-800 fixed lg:static
px-8 py-4 md:flex md:justify-between shadow-md">
  <div class="flex justify-between items-center">
    <div>
      <a @click="menuOff" href="#">
        <h1 class="font-light text-3xl text-gray-700 dark:text-gray-400 
        hover:text-blue-600 transition duration-300 ease-in-out">LK</h1>
      </a>
    </div>

    <div class="md:hidden flex items-center">
      <button @click="toggleMenu" class="h-8 w-8 group">
        <span 
        :class="isOpen ? 'transition-all duration-300 ease-in-out rotate-45 \
        translate-y-2.25 group-hover:bg-red-600' : 
        'transition-all duration-300 ease-in-out group-hover:bg-blue-600'" 
        class="block w-8 h-0.5 bg-gray-700 dark:bg-gray-400 my-1.5 "></span>
        <span 
        :class="isOpen ? 'transition-all duration-100 ease-in-out w-0' : 
        'transition-all duration-300 ease-in-out w-8 group-hover:bg-blue-600'" 
        class="block h-0.5 bg-gray-700 dark:bg-gray-400 my-1.5"></span>
        <span 
        :class="isOpen ? 'transition duration-300 ease-in-out -rotate-45 \
        group-hover:bg-red-600 -translate-y-2.25' : 
        'transition duration-300 ease-in-out group-hover:bg-blue-600'" 
        class="block w-8 h-0.5 bg-gray-700 dark:bg-gray-400 my-1.5"></span>
      </button>
    </div>
  </div>

  <Transition name="menuShow" :css="shouldAnimate">
    <div v-show="isOpen" class="md:!flex md:h-8">
      <div class="pt-2 md:p-0 md:!flex md:space-x-8 justify-between">

        <a 
        @click="menuOff"
        class="inner sm:flex items-center 
        border border-transparent
       w-full hover:bg-gray-300 md:hover:bg-transparent
      hover:text-blue-600 
      dark:text-gray-400 dark:hover:bg-gray-500
        dark:md:hover:bg-transparent
        cursor-pointer font-light 
        py-2 px-4 block
        transition-all duration-200 ease-in-out"
        href="#projects">
          Projects
        </a>

        <a 
        @click="menuOff" 
        class="inner sm:flex items-center 
        border border-transparent
        w-full hover:bg-gray-300 md:hover:bg-transparent
      hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-500
       dark:md:hover:bg-transparent
        cursor-pointer font-light 
        py-2 px-4 block
        transition-all duration-200 ease-in-out"
        href="#aboutMe">
          About&nbsp;Me
        </a>

        <a 
        @click="menuOff" 
        class="inner sm:flex items-center 
        border border-transparent
       w-full hover:bg-gray-300 md:hover:bg-transparent
      hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-500
       dark:md:hover:bg-transparent
        cursor-pointer font-light 
        py-2 px-4 block
        transition-all duration-200 ease-in-out"
        href="#contactMe">
          Contact
        </a>
      </div>     
    </div>
  </Transition>
</header>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import {ref} from 'vue'

export default {
  setup() {
    const isOpen = ref(false)
    const shouldAnimate = ref(false)

    const navBar = ref(null)

    const menuOff = () => {
      isOpen.value = false 
    }

    const toggleMenu = () => {
       isOpen.value = !isOpen.value
       shouldAnimate.value = true;
    }

    const checkScreenSize = () => {
      if (window.innerWidth > 768) {
        isOpen.value = false;
        shouldAnimate.value = false;
      }
    }

    const handleClickOutside = (e) => {
      if (navBar.value && !navBar.value.contains(e.target)) {
        isOpen.value = false;
      }
    }

    onMounted(() =>  {
      window.addEventListener('resize', checkScreenSize)
      document.addEventListener('click', handleClickOutside);
     
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkScreenSize)
      document.removeEventListener('click', handleClickOutside);
      
    });


    return { isOpen, menuOff, shouldAnimate, navBar, 
      toggleMenu };
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