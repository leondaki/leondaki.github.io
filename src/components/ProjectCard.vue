<template>
     <div class="mx-8 bg-white rounded-xl 
		sm:max-w-lg w-5/6 overflow-hidden mt-8 
		transition ease-in-out duration-300 
		shadow-md hover:shadow-lg">
			<button 
			@click="$emit('openModal'); $emit('lockBg')" 
			class="w-full h-full sm:flex cursor-pointer text-left">
				<div class="sm:shrink-0">
					<img class="sm:h-40 sm:w-44 h-80 w-full object-cover" :src="project.imageUrls[0]" alt="...">
				</div>

				<div class="p-4 w-full">
					<h3 class="tracking-wide text-md font-semibold
					inline-block text-transparent bg-clip-text
					animated-background bg-gradient-to-r from-gradblue via-emerald-400 to-gradblue">
					{{ project.title }}
					</h3>
					
					<div class="text-sm font-light tracking-wide text-black">{{project.date}}<br><br></div>
					<p class="mt-2 text-gray-500 text-md text-pretty">{{project.description}}</p>
				</div>
			</button>
	</div>
</template>

<script>
export default {
  props: {
	modalToShow: {
      type: Int32Array
    },
    project: {
      type: Object,
      required: true
    }
  },
}
</script>
