<script>
	import { auth, googleProvider } from "./firebase.js"
	import { authState } from "rxfire/auth"
	import Profil from "./Profil.svelte"

	let user;
	let showLogout = false;

	const unsubscribe = authState(auth).subscribe(u => user = u)

	const login = () => {
		auth.signInWithPopup(googleProvider)
	}

	const logout = () => {
		auth.signOut()
	}

	const toggleLogout = () => {
		showLogout = !showLogout;
	}
</script>

<header>
	{#if user}
		<section>
			<img on:click={toggleLogout} src={user.photoURL} alt="meg">
			{#if showLogout}
				<button class="logout" on:click={logout}>Logg ut {user.displayName}</button>
			{/if}
		</section>
		
	{:else}
		<button on:click={login}>Logg inn</button>
	{/if}
</header>

<main>
	<h1>Hello world</h1>
	{#if user}
		<Profil displayName={user.displayName} uid={user.uid} photoURL={user.photoURL} />
	{/if}
</main>


<style>
	section {
		display: grid;
		grid-auto-flow: column;
		justify-content: start;
		align-items: center;
		gap: 1rem;
	}

	img {
		width: 100px;
		border-radius: 50%;
		cursor: pointer;
	}

	button:active {
		background-color: darkblue;
	}

	button {
		cursor: pointer;
		border: none;
		border-radius: 1rem;
		background-color: blueviolet;
		color: white;
		padding: 1rem 2rem;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>