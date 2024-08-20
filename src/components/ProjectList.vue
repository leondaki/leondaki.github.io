<template>
   <h2 class="px-8 text-3xl font-bold" id="contactMe">Projects</h2>
  <div class="flex flex-wrap justify-center">
  <ProjectCard 
    v-for="project in projects" 
    :key="project.id" 
    :project="project" 
  />
  </div>
</template>


<script>
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
          title: 'Poker App',
          date: 'Fall 2024 - Ongoing',
          description: 'Development of an iOS application to track poker bets.',
          imageUrl: poker1
        },
        {
          id: 1,
          title: 'Lunar Mission',
          date: 'December 2023',
          description: 'Mission creation and analysis of a free return lunar trajectory.',
          imageUrl: lunar1
        },
        {
          id: 2,
          title: 'Scooter Design',
          date: 'March 2023 - April 2023',
          description: 'Design of a kick scooter with front wheel suspension.',
          imageUrl: scooter1
        },
        {
          id: 3,
          title: 'Origami Chess',
          date: 'January 2023 - April 2023',
          description: 'Design of a standard chess set folded out of paper.',
          imageUrl: chess1
        },
        {
          id: 4,
          title: 'Fluid Dynamics',
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