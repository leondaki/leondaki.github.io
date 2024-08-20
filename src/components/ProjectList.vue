<template>
<<<<<<< Updated upstream
   <h2 class="px-8 text-3xl font-bold" id="projects">Projects</h2>
  <div class="flex flex-wrap justify-center">
=======
  <h2 class="px-8 text-3xl font-bold" id="projects">Projects</h2>
  <div class="flex flex-wrap justify-center mx-8"></div>

>>>>>>> Stashed changes
  <ProjectCard 
    v-for="project in projects" 
    :key="project.id" 
    :project="project" 
<<<<<<< Updated upstream
  />
  </div>
=======
    @toggleModal="toggleModal"
  />

  <ProjectModal 
    v-for="project_detail in project_details"
    :key="project_detail.id" 
    :project_detail="project_detail" 
    :modalActive="modalActive" 
    @toggleModal="toggleModal"/>
>>>>>>> Stashed changes
</template>


<script>
<<<<<<< Updated upstream
import ProjectCard from './ProjectCard.vue';

import lunar1 from '@/assets/projects/lunar_1.png';
import lunar2 from '@/assets/projects/lunar_2.png';
import scooter1 from '@/assets/projects/scooter_1.png';
import chess1 from '@/assets/projects/chess_1.png';
import poker1 from '@/assets/projects/poker_1.png';

export default {
    components: {
      ProjectCard
    },
    data: function() {
      return {
        projects: [
        {
          id: 0,
          title: 'Poker Bet Tracker',
          date: 'Fall 2024 - Ongoing',
          description: 'Development of an iOS application to track poker bets.',
          imageUrl: poker1
        },
        {
          id: 1,
          title: 'Lunar Free Return Mission',
          date: 'December 2023',
          description: 'Mission creation and analysis of a free return lunar trajectory.',
=======
import {ref} from 'vue'
import ProjectCard from './ProjectCard.vue';

import lunar1 from '@/assets/test.jpg';
import ProjectModal from './ProjectModal.vue';
// import lunar2 from '@/assets/test.jpg';
// import scooter1 from '@/assets/test.jpg';
// import chess1 from '@/assets/test.jpg';
// import poker1 from '@/assets/test.jpg';

export default {
  setup() {
   const projects = ref([
        {
          id: 1,
          title: 'Poker Bet Tracker',
          date: 'Fall 2024 - Ongoing',
          description: 'Development of an iOS application to track poker bets.',
>>>>>>> Stashed changes
          imageUrl: lunar1
        },
        {
          id: 2,
<<<<<<< Updated upstream
          title: 'Routh Array Calculator',
          date: 'October 2023',
          description: 'Developed calculator to aid in system stability analysis.',
          imageUrl: lunar1
        },
        {
          id: 3,
          title: 'Kick Scooter Design',
          date: 'March 2023 - April 2023',
          description: 'Design of a kick scooter with front wheel suspension.',
          imageUrl: scooter1
        },
        {
          id: 4,
          title: 'Origami Chess Set',
          date: 'January 2023 - April 2023',
          description: 'Design of a standard chess set folded out of paper.',
          imageUrl: chess1
        },
        {
          id: 5,
          title: 'Fluid Dynamics Modeling',
          date: 'December 2022',
          description: 'Modeling of the evolution of a fluid velocity profile over time',
          imageUrl: lunar2
        }
        //Add more project objects as needed
      ]
    };
    }
  }
  </script>
=======
          title: 'Free Return Lunar Mission',
          date: 'December 2023',
          description: 'Design of a free return lunar trajectory.',
          imageUrl: lunar1
        }
        //Add more project objects as needed
      ]);
    
      const project_details = ref([
        {
          id: 1,
          title: 'Poker Bet Tracker',
          date: 'Fall 2024 - Ongoing',
          objectives: 'Develop an app to keep track of bets placed in poker.',
          methods: 'Developing application for iOS using Swift.',
          results: 'App expected to save around 10 minutes of manual bet tracking per game.'
        },
        {
          id: 2,
          title: 'Free Return Lunar Mission',
          date: 'December 2023',
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
          •  Calculated the required delta v required to place the spacecraft\
          on its free return trajectory, as well as the position of the burn \n \
          • Mission requirements of time, perilune distance, and fuel use were satisfied'
        }
        //Add more project detail objects as needed
      ])
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    }

    return { projects, project_details, modalActive, toggleModal };
  },
  components: {
      ProjectCard,
      ProjectModal
  },
}
</script>
>>>>>>> Stashed changes
