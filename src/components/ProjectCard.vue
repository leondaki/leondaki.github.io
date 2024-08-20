<template>
    <div class="mx-8 md:h-40 bg-white rounded-xl 
	md:max-w-md w-5/6 overflow-hidden mt-8
		transition-colors ease-in-out duration-700 border-2 border-gray-200 hover:border-gray-400">
			<a href="#" class="md:flex">
				<div class="md:shrink-0">
					<img class="md:h-40 md:w-44 h-80 w-full object-cover" :src="project.imageUrl" alt="...">
				</div>

				<div class="p-4 w-full">
					<span class="uppercase tracking-wide text-sm text-blue-500 font-semibold 
					text-transparent bg-clip-text bg-gradient-to-r from-gradblue to-gradgreen">{{project.title}}</span>
					<div class="text-sm font-light tracking-wide text-black">{{project.date}}<br><br></div>
					<p class="mt-2 text-black">{{project.description}}</p>
					
				</div>
			</a>
	</div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
