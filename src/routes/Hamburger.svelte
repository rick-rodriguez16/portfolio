<script lang="ts">
	export let open = true;
</script>

<button
	on:click={() => (open = !open)}
	class="absolute top-2 right-4 z-50 flex h-8 w-8 flex-col justify-around md:hidden"
>
	<div
		class="h-1 w-full rounded bg-surface-900-50-token transition-all duration-300 {open
			? 'translate-y-2 rotate-45'
			: ''}"
	/>
	<div
		class="h-1 w-full rounded bg-surface-900-50-token transition-all duration-300 {open ? 'opacity-0' : ''}"
	/>
	<div
		class="h-1 w-full rounded bg-surface-900-50-token transition-all duration-300 {open
			? '-translate-y-3 -rotate-45'
			: ''}"
	/>
</button>
