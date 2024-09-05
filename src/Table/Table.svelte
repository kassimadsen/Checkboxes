<script>
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	let tally = [];
	let count = 0;
	function appendTally() {
		tally.push(count++);
		tally = tally;
	}
</script>

<Table hoverable={true}>
	<TableHead>
		<TableHeadCell>Monday</TableHeadCell>
		<TableHeadCell>Tuesday</TableHeadCell>
		<TableHeadCell>Wednesday</TableHeadCell>
		<TableHeadCell>Thursday</TableHeadCell>
		<TableHeadCell>Friday</TableHeadCell>
		<TableHeadCell>Saturday</TableHeadCell>
		<TableHeadCell>Sunday</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		<TableBodyRow>
			<TableBodyCell>
				<button id="tally" on:click={appendTally}>Add Tally</button>
				<ol id="count">
					{#each tally as i}
						<li class="tally"></li>
					{/each}
				</ol>
			</TableBodyCell>
			<TableBodyCell>
				<button id="tally" on:click={appendTally}>Add Tally</button>
				<ol id="count">
					{#each tally as i}
						<li class="tally"></li>
					{/each}
				</ol>
			</TableBodyCell>
			<TableBodyCell>
				<button id="tally" on:click={appendTally}>Add Tally</button>
				<ol id="count">
					{#each tally as i}
						<li class="tally"></li>
					{/each}
				</ol>
			</TableBodyCell>
			<TableBodyCell>
				<button id="tally" on:click={appendTally}>Add Tally</button>
				<ol id="count">
					{#each tally as i}
						<li class="tally"></li>
					{/each}
				</ol>
			</TableBodyCell>
			<TableBodyCell>
				<button id="tally" on:click={appendTally}>Add Tally</button>
				<ol id="count">
					{#each tally as i}
						<li class="tally"></li>
					{/each}
				</ol>
			</TableBodyCell>
			<TableBodyCell>
				<button id="tally" on:click={appendTally}>Add Tally</button>
				<ol id="count">
					{#each tally as i}
						<li class="tally"></li>
					{/each}
				</ol>
			</TableBodyCell>
			<TableBodyCell>
				<button id="tally" on:click={appendTally}>Add Tally</button>
				<ol id="count">
					{#each tally as i}
						<li class="tally"></li>
					{/each}
				</ol>
			</TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>

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
