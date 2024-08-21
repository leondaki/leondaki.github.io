<template>
  <h2 class="px-8 text-3xl font-bold" id="projects">Projects</h2>
  <div class="flex flex-wrap justify-center mx-8">
    <ProjectCard 
      v-for="project in projects" 
      :key="project.id" 
      :project="project" 
      @toggleModal="toggleModal(project.id); $emit('toggleBg')"
    />
  </div>

  <ProjectModal 
    v-for="project_detail in project_details"
    :key="project_detail.id" 
    :project_detail="project_detail" 
    :modalActive="selectedID == project_detail.id" 
    @closeModal="closeModal"/>
</template>


<script>
import {ref} from 'vue'
import ProjectCard from './ProjectCard.vue';

import lunar1 from '@/assets/lunar_1.png';
import ProjectModal from './ProjectModal.vue';
// import lunar2 from '@/assets/test.jpg';
import scooter1 from '@/assets/scooter_1.png';
import chess1 from '@/assets/chess_1.png';
// import poker1 from '@/assets/test.jpg';

export default {
  setup() {
   const projects = ref([
        {
          id: 2,
          title: 'Free Return Lunar Mission',
          date: 'December 2023',
          description: 'Design of a free return lunar trajectory.',
          imageUrl: lunar1
        },
        {
          id: 3,
          title: 'Kick Scooter Design',
          date: 'March 2023 - April 2023',
          description: 'Design of an original kick scooter with front wheel suspension.',
          imageUrl: scooter1
        },
        {
          id: 4,
          title: 'Origami Chess Set',
          date: 'January 2023 - April 2023',
          description: 'Design of an original origami chess set.',
          imageUrl: chess1
        },
        //Add more project objects as needed
      ]);
    
    const project_details = ref([
        {
          id: 2,
          title: 'Free Return Lunar Mission',
          date: 'December 2023',
          imageUrl: lunar1,
          objectives: '\
          • Design a free return lunar trajectory mission requiring only one engine burn, \
          sending a spacecraft to the moon in such a way that it will naturally swing around the moon and return to earth \n \
          • Determine the location and direction of the applied burn. \n \
          • Satisfy mission duration, perilune distance, and fuel use requirement \n \
          • Tabulate the mission timeline',
          methods: '\
          • Simulated theoretical trajectory using NASA\'s General Mission Analysis Tool (GMAT) \n \
          • Used real predicted positions of the Earth and Moon during given launch date \n \
          • Used vary/achieve GMAT functionalty along with its differential solver to iteravely test various \
          translunar injection burns and trajectories',
          results: '\
          •  Calculated the required Δv required to place the spacecraft\
          on its free return trajectory, as well as the position of the burn \n \
          • Mission requirements of time, perilune distance, and fuel use were satisfied'
        },
        {
          id: 3,
          title: 'Kick Scooter Design',
          date: 'March 2023 - April 2023',
          imageUrl: scooter1,
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
          imageUrl: chess1,
          objectives: '\
          • Design the complete standard 32 piece chess set to be folded out of paper \n \
          • Maintain distinct profiles for each of the six piece types to ensure recognizibility,\
          and ensure the relative piece heights are correct \n \
          • Create pieces with color accents',
          methods: '\
          • Derived each piece design from the traditional origami bird base for consistency \n \
          • Folded multiple versions of each piece to refine its design and enure satisfactory aesthetics and reasonable folding time \n \
          • Compared heights of each piece with real chess pieces to establish correct relative piece heights',
          results: '\
          • Folded a complete set of origami chess pieces out of two sided colored paper \n \
          • Pieces incorporate color accent, contributing to aesthetic \n \
          • Video showcase of final set <a href="https://www.youtube.com/watch?v=RilnBviIWbY&t=218s" \
				  class="text-gray-600 hover:underline font-semibold">here</a>'
        },
        //Add more project detail objects as needed
      ])

    
    const selectedID = ref(null);

    const closeModal = () => {
      selectedID.value = ref(null);
    }

    const toggleModal = (projectID) => {
      selectedID.value = projectID
    }

    return { 
      projects, 
      project_details,
      selectedID, 
      toggleModal ,
      closeModal };
  },
  components: {
      ProjectCard,
      ProjectModal
  },
}
</script>
