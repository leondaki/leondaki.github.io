<template>	
    <div class="px-8 pt-6 pb-8 scroll-mt-[10svh] lg:scroll-mt-0 
    dark:bg-zinc-900" id="aboutMe">
        <span class="text-3xl font-bold dark:text-gray-300" >About Me</span>
        <div class="block md:inline-block font-normal text-gray-900">
            <p class="mt-2 text-gray-500 dark:text-gray-400 text-pretty">
                I am a <span class="font-semibold text-gray-900 dark:text-gray-300 underline  decoration-blue-500">curious</span>
                and <span class="font-semibold text-gray-900 dark:text-gray-300 underline decoration-blue-500">efficient</span> individual, 
                studying Mechanical Engineering with a minor in Mathematics at The City College of New York. 
                Originally majoring in Physics, I decided to switch my major to Engineering, desiring a field with a creative aspect — 
                bringing ideas to life via drawing and computer modeling, while still supported by the foundations of science and math.<br><br>

                After my most recent summer internship at <a href="https://www.bloomenergy.com/" 
                class="font-semibold text-gray-900 dark:text-gray-300 underline  decoration-green-500">Bloom Energy</a>, 
                I have become more interested in the fields of <span class="font-semibold text-gray-900 dark:text-gray-300  underline  decoration-red-500">data science</span>
                and <span class="font-semibold dark:text-gray-300 text-gray-900 underline  decoration-red-500">automation</span>. I plan to continue my studies at 
                The City College of New York next Spring by applying for the Master's of Engineering program, while continuing to improve my skills.<br><br>

                Feel free to contact me with any questions about the projects listed above.
            </p>
        </div>
    </div>
</template>

<script>
import myPfp from '@/assets/pfp.jpg'

export default {
    data: function () {
        return {
            myPfp
        }
    }
}
</script>