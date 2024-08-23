<template>
  <div 
  :class="lockBg ? 'w-screen h-screen overflow-hidden' : 'none'">
 <p class="bg-white uppercase p-4 fixed top-0 z-20 ">Lock Bg? {{ lockBg }}</p>
    <NavBar/>
    <TitleBlock/>
    <ProjectList @lockBg="lockBg"/>
    <AboutMe/>
    <ContactMe/>
    <MyFooter/>

  </div>
</template>

<script>
import {ref} from 'vue'

import NavBar from './components/NavBar.vue'
import TitleBlock from './components/TitleBlock.vue'
import AboutMe from './components/AboutMe.vue'
import ContactMe from './components/ContactMe.vue'
import ProjectList from './components/ProjectList.vue'
import MyFooter from './components/MyFooter.vue';

export default {
  name: 'App',
  setup() {
      const lockBg = ref(false);

      return { lockBg };
  },
  components: {
    NavBar,
    TitleBlock,
    ProjectList,
    AboutMe,
    ContactMe,
    MyFooter,
  }
}
</script>

