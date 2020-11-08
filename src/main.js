import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Camilo',
		lastName: 'Torres'
	}
});

export default app;