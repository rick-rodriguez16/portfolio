<script lang="ts">
	export let open = false;
</script>

<button on:click={() => (open = !open)} class="flex h-8 w-8 flex-col justify-around z-50 absolute top-2 right-4"
	>
		<div
			class="h-1 w-full rounded bg-white transition-all duration-300 {open
				? 'translate-y-2 rotate-45'
				: ''}"
		/>
		<div
			class="h-1 w-full rounded bg-white transition-all duration-300 {open ? 'opacity-0' : ''}"
		/>
		<div
			class="h-1 w-full rounded bg-white transition-all duration-300 {open
				? '-translate-y-3 -rotate-45'
				: ''}"
		/>
</button>
