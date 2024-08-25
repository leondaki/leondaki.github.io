<template>
  <div class="bg-gray-100 dark:bg-zinc-800 pb-12 scroll-mt-[10svh] lg:scroll-mt-0" id="projects">
    <h2 class="px-8 pt-6 text-3xl font-bold dark:text-gray-400">Projects</h2>

    <p class="mt-2 px-8 text-gray-500 text-pretty dark:text-gray-500">
        Listed below are various projects I have worked on from the past few years.
        Click on any one of the cards below to learn more!
      </p>
    
    <div class="flex flex-wrap justify-center">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project" 
        @openModal="openModal(project.id)"/>
    </div>

    <ProjectModal 
      v-for="project in projects" 
      :key="project.id" 
      :project="project" 
      :modalActive="selectedID == project.id" 
      @closeModal="closeModal()"/>

  </div>
</template>


<script>
import {ref, onMounted, onBeforeUnmount } from 'vue'

import ProjectCard from './ProjectCard.vue';
import ProjectModal from './ProjectModal.vue';

import bloom1 from '@/assets/bloom_1.jpg';

import lunar1 from '@/assets/lunar_1.png';
import lunar2 from '@/assets/lunar_2.png';
import lunar3 from '@/assets/lunar_3.png';
import lunar4 from '@/assets/lunar_4.png';
import lunar5 from '@/assets/lunar_5.png';

import scooter1 from '@/assets/scooter_1.png';
import scooter2 from '@/assets/scooter_2.png';
import scooter3 from '@/assets/scooter_3.png';
import scooter4 from '@/assets/scooter_4.png';
import scooter5 from '@/assets/scooter_5.png';
import scooter6 from '@/assets/scooter_6.png';
import scooter7 from '@/assets/scooter_7.png';

import chess1 from '@/assets/chess_1.jpg';
import chess2 from '@/assets/chess_2.png';
import chess3 from '@/assets/chess_3.jpg';
import chess4 from '@/assets/chess_4.jpg';
import chess5 from '@/assets/chess_5.png';
import chess6 from '@/assets/chess_6.png';

// import poker1 from '@/assets/test.jpg';

export default {
  emits: ['toggleBgLock'],
  setup(props, {emit}) {
   const projects = ref([
        {
          id: 1,
          title: 'Power Recovery Process',
          date: 'June 2024 - August 2024',
          description: 'Development of automation process to recover power in Bloom Energy modules.',
          imageUrls: [bloom1],
          imageCaptions: ['This project contains confidential information that is \
          property of Bloom Energy so pictures are omitted'],
          objectives: '\
          • Goal was to more efficiently recover power remotely in Bloom \
          Energy\'s power modules upon a drop in power levels \n \
          • Ensure power modules are kept within operating limits during the process',
          methods: ' \
          • Process was developed using Python, the Pandas library and OSI PI \n \
          • Flowcharts were constructed to assist in designing the code ',
          results: '\
          • Automation process saves over 100 hours of manual work per year \n \
          • Process decreases time to recover power fin modules from weeks to a few days \n \
          • Operators can initiate process by clicking a single button',
        },
        {
          id: 2,
          title: 'Free Return Lunar Mission',
          date: 'December 2023',
          description: 'Plotting a free return lunar trajectory for a spacecraft.',
          imageUrls: [lunar1, lunar2, lunar3, lunar4, lunar5],
          imageCaptions: [ 
            'Overview of final trajectory', 
            'Burn location and departure path of spacecraft', 
            'Table of GMAT differential solver results showing the calculated Δv value', 
            'Top view of entire spacecraft path along with orbital path of Moon', 
            'Mission timetable highlighting key events'],
          objectives: '\
          • Design a free return lunar trajectory mission requiring only one engine burn, \
          launching a spacecraft in such a way that it will naturally swing around the Moon and return to Earth \n \
          • Determine the location and direction of the applied burn. \n \
          • Satisfy mission duration, perilune distance, and fuel use requirement \n \
          • Tabulate the mission timeline',
          methods: '\
          • Simulated theoretical trajectory using NASA\'s General Mission Analysis Tool (GMAT) \n \
          • Used real predicted positions of the Earth and Moon during given launch date \n \
          • Used vary/achieve GMAT functionalty along with its differential solver to iteratively test various \
          translunar injection burns and trajectories',
          results: '\
          •  Calculated the required Δv required to place the spacecraft\
          on its free return trajectory, as well as the position of the burn \n \
          • Mission requirements of time, perilune distance, and fuel use were satisfied'
        },
        {
          id: 3,
          title: 'Kick Scooter Design',
          date: 'March 2023 - May 2023',
          description: 'Modeling and analysis of a kick scooter with front wheel suspension.',
          imageUrls: [scooter1, scooter2, scooter3, scooter4, scooter5, scooter6, scooter7],
          imageCaptions: [
            'The completed kick scooter design', 
            '2D Drawing of the scooter platform', 
            '2D Drawing of the handlebar', 
            '2D Drawing of the front wheel connector, for use in the suspension system', 
            'FEM anaysis of the handlbar deflection for a given horizontal force',
            'FEM analysis of the platform deflection on application of a given vertical load',
            'Bill of materials for the scooter, with a price $52 under budget limit'],
          objectives: '\
          • Design an original kick scooter with front wheel suspension\n \
          • Satisfy strength requirements, given deflection limits \n \
          • Complete design within a given budget',
          methods: '\
          • Modeled kick scooter (parts, drawings, and assembly) using SolidWorks \n \
          • Performed FEM analysis to anaylaze how the assembly would deflect under test loading \n \
          • Tabulated items and prices in a bill of materials to ensure acceptable cost ',
          results: '\
          • Final design cost 10% less than  the budget requirement \n \
          • Observed defelection under test loading was far from failure region'
        },
        {
          id: 4,
          title: 'Origami Chess Set',
          date: 'January 2023 - April 2023',
          description: 'Design of a complete standard chess set made out of paper.',
          imageUrls: [chess1, chess2, chess3, chess4, chess5, chess6 ],
          imageCaptions: [
          'A selection of the completed chess pieces', 
          'Earliest prototype design',
          'Next prototype design',
          'Further prototype progression',
          'Design progression of the Knight', 
          'A view of the completed set'],
          objectives: '\
          • Design the complete standard 32 piece chess set to be folded out of paper \n \
          • Maintain distinct profiles for each of the six piece types to ensure recognizibility,\
          and ensure the relative piece heights are correct \n \
          • Create pieces with color accents',
          methods: '\
          • Derived each piece design from the traditional origami bird base for consistency \n \
          • Folded multiple versions of each piece to refine its design and ensure satisfactory aesthetics and reasonable folding time \n \
          • Compared heights of each piece with real chess pieces to establish correct relative piece heights',
          results: '\
          • Folded a complete set of origami chess pieces out of two sided colored paper \n \
          • Pieces incorporate color accent, contributing to aesthetic \n \
          • Video showcase of final set <a href="https://www.youtube.com/watch?v=RilnBviIWbY&t=218s" \
				  class="text-gray-600 underline font-semibold">here</a>'
        },
        //Add more project objects as needed
      ]);
    
    const windowTop = ref(0);

    const onScroll = () => {
      windowTop.value = window.scrollY;
    };

    onMounted(() => {
      window.addEventListener('scroll', onScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll);
    });


    const selectedID = ref(0);

    const modalOpen = ref(false); 

    let storedPosition = 0;

    const closeModal = () => {
      emit('toggleBgLock', storedPosition);
      modalOpen.value = false;
      selectedID.value = ref(null);
    }      

    const openModal = (projectID) => {
      emit('toggleBgLock', windowTop.value);
      storedPosition = windowTop.value
      selectedID.value = projectID
      modalOpen.value = true;
    }

    return { 
      projects, 
      selectedID, 
      openModal ,
      closeModal } ;
  },
  components: {
      ProjectCard,
      ProjectModal
  },
}
</script>
