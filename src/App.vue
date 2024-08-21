<template>
  <NavBar/>
  <TitleBlock/>
  <ProjectList/>
  <AboutMe/>
  <ContactMe/>
  <MyFooter/>
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
    const modalBg = ref(false); 

    const toggleBg = () => {
      modalBg.value = !modalBg.value
    }

    return { modalBg, toggleBg }
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

