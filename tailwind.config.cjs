const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', 
	require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],
	
	theme: {
		extend: {}
	},

	darkMode: 'class',

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};

module.exports = config;
