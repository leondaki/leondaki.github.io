<template>
  <div :style="lockBgStyle">
    <NavBar/>
    <TitleBlock/>
    <ProjectList @toggleBgLock="toggleBgLock"/>
    <AboutMe/>
    <ContactMe/>
    <MyFooter/>
  </div>
</template>

<script>
import {ref, computed, onUpdated } from 'vue'

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
    const receivedValue = ref(0);

    const lockBgStyle = computed(() => ({
      position: lockBg.value ? 'fixed': '',
      top: lockBg.value ? `-${receivedValue.value}px`: '',
    }));

    const toggleBgLock = (value) => {
      receivedValue.value = value
      lockBg.value = !lockBg.value;
    }

    onUpdated(() => {
      lockBg.value ? '' : window.scrollTo(0, receivedValue.value)
    })

    return { lockBg, lockBgStyle, 
      toggleBgLock, receivedValue};
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



