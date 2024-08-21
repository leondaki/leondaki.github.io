<template>
     <div class="mx-8 md:h-40 bg-white rounded-xl 
		md:max-w-lg w-5/6 overflow-hidden mt-8 
		transition-colors ease-in-out duration-300 
		border-2 border-gray-200 hover:border-gray-400">
			<button 
			@click="$emit('toggleModal')" 
			class="w-full h-full md:flex cursor-pointer text-left">
				<div class="md:shrink-0">
					<img class="md:h-40 md:w-44 h-80 w-full object-cover" :src="project.imageUrl" alt="...">
				</div>

				<div class="p-4 w-full">
					<h3 class="uppercase tracking-wide text-md font-normal ">
					{{ project.title }}
					</h3>
					
					<div class="text-sm font-light tracking-wide text-black">{{project.date}}<br><br></div>
					<p class="mt-2 text-gray-500">{{project.description}}</p>
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
