<script lang="ts">
	export let name: string;
</script>

<main>
	<h1>Hello {name}!</h1>
    <div class="wrapper">
       <h2>List</h2>
	       <ul class="item-list">
		   </ul>
	</div>
	<footer>
		<form class="new-item-form">
		<div class="field">
			<label>Details:</label>
			<input type="text" id="details">
		</div>
		<button>Add</button>
		</form>
	</footer>
</main>

<style>
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