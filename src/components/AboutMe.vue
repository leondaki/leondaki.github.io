<template>
    <div class="my-8">	
		<div class="px-8">
            <span class="text-3xl font-bold" id="aboutMe">About Me</span>
            <div class="block md:inline-block font-normal text-gray-900">
                <div class="my-4 w-48 h-48 mx-auto md:float-right md:pl-4 md:my-0 ">
                    <img class="rounded-xl overflow-hidden w-fit" :src="myPfp" alt="Profile Picture">
                </div>
                <p class="mt-2 text-gray-500 dark:text-gray-400 text-pretty">
                    I am a <span class="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">curious</span>
                    and <span class="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">efficient</span> individual, 
                    studying Mechanical Engineering with a minor in Mathematics at The City College of New York. 
                    Originally majoring in Physics, I decided to switch my major to Engineering, desiring a field with a creative aspect — 
                    bringing ideas to life via drawing and computer modeling, while still supported by the foundations of science and math.<br><br>

                    After my most recent summer internship at <a href="https://www.bloomenergy.com/" 
                    class="font-semibold text-gray-900 underline dark:text-white decoration-green-500">Bloom Energy</a>, 
                    I have become more interested in the fields of <span class="font-semibold text-gray-900 underline dark:text-white decoration-red-500">data science</span>
                    and <span class="font-semibold text-gray-900 underline dark:text-white decoration-red-500">automation</span>. I plan to continue my studies at 
                    The City College of New York next Spring by applying for the Master's of Engineering program, while continuing to improve my skills.<br><br>

                    Feel free to contact me with any questions about the projects listed above.
                </p>
            </div>
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