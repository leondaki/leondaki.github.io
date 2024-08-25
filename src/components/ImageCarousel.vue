<template>
<div class="mt-2 md:mt-0">
    <!-- Carousel -->
    <div class="carousel 
    flex items-center justify-around">
        <!-- Viewing Window-->
        <div class="whitespace-nowrap inline-flex items-center 
        h-80 w-80 md:h-96 md:w-96 overflow-hidden">
            <!-- Track -->
            <div class="flex"
            :style="trackStyle" 
            @transitionend="handleTransitionEnd">
                <!--Wraparound Last Image -->
                <div class="h-80 w-80 md:h-96 md:w-96 flex items-center">
                    <img :src="projectImages[projectImages.length - 1]" class="object-contain" />
                </div>

                <!--Images-->
                <CarouselItem 
                v-for="(image,index) in projectImages" 
                :key="index" 
                :picture="image" class="" />

                <!--Wraparound Last Image -->
                <div class="h-80 w-80 md:h-96 md:w-96 flex items-center">
                    <img :src="projectImages[0]" class="object-contain" />
                </div>
                
            </div>
        </div>
    </div>
          
    <div class= "w-80 md:w-96 h-24 md:h-30 flex items-start
    justify-around mt-2 mx-auto ">
    <button @click='prevPic' 
        :class="(imageCount==1) ? 'hidden' :
        'h-8 block w-8  text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-full transition duration-200 ease-in-out'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
         class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
        </button>

        <div class="w-5/6 h-full flex items-start">
            <Transition name="captionFade" mode="out-in">
                <div 
                v-if="!isTransitioning"
               class="mx-auto px-2 text-pretty 
               dark:text-gray-300 text-center text-sm overflow-hidden">
                    <span 
                    :class="(imageCount==1) ? 'hidden' : ''">
                    Figure {{ capNum+1 }}. 
                    </span>

                    <span 
                    class="font-light italic text-gray-500 dark:text-gray-400">
                        {{ projectCaptions[capNum] }}
                    </span>
                </div>
            </Transition>
        </div>

        <button @click='nextPic' 
        :class="(imageCount==1) ? 'hidden' :
        'h-8 block w-8 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-full  transition duration-200 ease-in-out'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
        </button>
    </div>
</div>
</template>

<script>
import { ref, computed} from 'vue'
import CarouselItem from './CarouselItem.vue';

export default {
    setup(props) {
        const picNum = ref(0);
        const capNum = ref(0);

        const isTransitioning = ref(false);

        const imageCount = computed(() => { return props.projectImages.length })
        
        const trackStyle = computed(() => ({
            transform: `translateX(-${(picNum.value+1) * 100/(props.projectImages.length+2)}%)`,
            transition: isTransitioning.value ? 'transform 0.5s ease-in-out' : 'none',
        }));

        const nextPic = () => {
            if (isTransitioning.value || imageCount.value==1) return;
            if (picNum.value+1 > imageCount.value) {
                picNum.value = 0;    
                return;
            } 
            picNum.value += 1;
            if (capNum.value > imageCount.value-2) {
                capNum.value = 0;
            }
            else {
                capNum.value = picNum.value;
            }
            isTransitioning.value = true; 
        }

        const prevPic = () => {
            if (isTransitioning.value || imageCount.value==1) return;
            
            if (picNum.value < 0) {
                picNum.value = imageCount.value-1;
                return;                 
            } 
            picNum.value -= 1;   
            if (capNum.value < 1) {
                capNum.value = imageCount.value-1;
            }
            else {
                capNum.value = picNum.value;
            }

            isTransitioning.value = true;
        }

        const handleTransitionEnd = () =>{
            isTransitioning.value = false;

            if (picNum.value === props.projectImages.length) {
                picNum.value = 0;
            } else if (picNum.value === -1) {
                picNum.value = props.projectImages.length-1;
            }
        }
        return { nextPic, prevPic, imageCount, picNum, trackStyle, 
            handleTransitionEnd, isTransitioning, capNum};
    },
    props: {
        projectImages: {
            type: Object,
            required: true
        },
        projectCaptions: {
            type: Object,
            required: true
        }
    },
    components: {
        CarouselItem
    }
};
</script>

<style>
.captionFade-enter-active , 
.captionFade-leave-active {
  transition-property: opacity;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
}

.captionFade-enter-from ,
.captionFade-leave-to {
  opacity: 0;
}

.captionFade-enter-to, 
.captionFade-leave-from {
  opacity: 100%;
}
</style>