<script setup>
  import NavBar from './components/NavBar.vue'
  import TitleBlock from './components/TitleBlock.vue'
  import AboutMe from './components/AboutMe.vue'
  import ContactMe from './components/ContactMe.vue'
  import ProjectList from './components/ProjectList.vue'
  import MyFooter from './components/MyFooter.vue';
</script>

<template>
  <NavBar/>
  <TitleBlock/>
  <ProjectList/>
  <AboutMe/>
  <ContactMe/>
  <MyFooter/>
</template>

<script>
export default {
  name: 'App',
  components: {
    NavBar,
    TitleBlock,
    ProjectList,
    AboutMe,
    ContactMe,
    MyFooter
  }
}
</script>

