<script>
	let tally = [];
	let count = 0;
	function appendTally() {
		tally.push(count++);
		tally = tally;
	}
</script>

<button id="tally" on:click={appendTally}>add another</button>
<ol id="count">
	{#each tally as i}
		<li class="tally"></li>
	{/each}
</ol>

<style>
	li {
		display: inline-block;
		height: 20px;
		border: 2px solid #000;
		margin: 0 2px 0 0;
	}

	li:nth-child(5n) {
		-webkit-transform: rotate(300deg);
		-moz-transform: rotate(300deg);
		-o-transform: rotate(300deg);
		height: 30px;
		position: relative;
		left: -15px;
		top: 5px;
		margin-right: 10px;
	}
</style>
