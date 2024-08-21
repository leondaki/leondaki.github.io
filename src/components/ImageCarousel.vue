<template>
  <div class="block border border-red-500">
    <div class="relative">
        <div class="h-72 sm:w-72 w-full flex items-center">
            <div class="border-200">
                <img 
                class="rounded-lg object-contain" 
                :src="projectImages[picNum]">
            </div>
         </div>
        <p class="text-center mt-2">
            Figure {{ picNum+1 }}.
        </p>

        <div class= "w-72 flex items-center justify-between">
            <button
            @click='prevPic' 
            class="h-8 block w-8 hover:text-blue-500 transition duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
            </button>

            <button
            @click='nextPic' 
            class="h-8 block w-8 hover:text-blue-500 transition duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
            </button>
        </div>
    </div>
    
        
    </div>

</template>

<script>
import { ref, computed } from 'vue'

export default {
    setup(props) {
        const picNum = ref(0);
        const imageNum = computed(() => { return props.projectImages.length })

        const nextPic = () => {
            picNum.value += 1;
            if (picNum.value > imageNum.value-1) {
                picNum.value = 0;
            } 
        }

        const prevPic = () => {
            picNum.value -= 1;
            if (picNum.value < 0) {
                picNum.value = 0;
            }
        }

        return { nextPic, prevPic, picNum };
    },
    props: {
        projectImages: {
            type: Object,
            required: true
        }
    }
};
</script>
