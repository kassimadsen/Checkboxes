<script>
	import {
	A,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	
	let mondaytally = [];
	let mondaycount = 0;

	let tuesdaytally = [];
	let tuesdaycount = 0;

	let wednesdaytally = [];
	let wednesdaycount = 0;
	
	let thursdaytally = [];
	let thursdaycount = 0;

	let fridaytally = [];
	let fridaycount = 0;

	let saturdaytally = [];
	let saturdaycount = 0;

	let sundaytally = [];
	let sundaycount = 0;
	
	function appendMondayTally() {
		mondaytally.push(mondaycount++);
		mondaytally = mondaytally;
	}

	function appendTuesdayTally() {
		tuesdaytally.push(tuesdaycount++);
		tuesdaytally = tuesdaytally;
	}

	function appendWednesdayTally() {
		wednesdaytally.push(wednesdaycount++);
		wednesdaytally = wednesdaytally;
	}

	function appendThursdayTally() {
		thursdaytally.push(thursdaycount++);
		thursdaytally = thursdaytally;
	}

	function appendFridayTally() {
		fridaytally.push(fridaycount++);
		fridaytally = fridaytally;
	}

	function appendSaturdayTally() {
		saturdaytally.push(saturdaycount++);
		saturdaytally = saturdaytally;
	}

	function appendSundayTally() {
		sundaytally.push(sundaycount++);
		sundaytally = sundaytally;
	}

	function clearMondaysTallys() {
		mondaytally.length = 0;
	}

	function clearTuesdaysTallys() {
		tuesdaytally.length = 0;
	}

	function clearWednesdaysTallys() {
		wednesdaytally.length = 0;
	}

	function clearThursdaysTallys() {
		thursdaytally.length = 0;
	}

	function clearFridaysTallys() {
		fridaytally.length = 0;
	}

	function clearSaturdaysTallys() {
		saturdaytally.length = 0;
	}

	function clearSundaysTallys() {
		sundaytally.length = 0;
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
				<button id="mondaytally" on:click={appendMondayTally}>Add Monday Tally</button>
				<ol id="mondaycount">
					{#each mondaytally as i}
						<li class="monday"></li>
					{/each}
				</ol>
				<button id="clearmonday" on:click={clearMondaysTallys}>Clear Monday's Tally's</button>
			</TableBodyCell>
			<TableBodyCell>
				<button id="tuesdaytally" on:click={appendTuesdayTally}>Add Tuesday Tally</button>
				<ol id="tuesdaycount">
					{#each tuesdaytally as i}
						<li class="tuesday"></li>
					{/each}
				</ol>
				<button id="cleartuesday" on:click={clearTuesdaysTallys}>Clear Tuesday's Tally's</button>
			</TableBodyCell>
			<TableBodyCell>
				<button id="wednesdaytally" on:click={appendWednesdayTally}>Add Wednesday Tally</button>
				<ol id="wednesdaycount">
					{#each wednesdaytally as i}
						<li class="wednesday"></li>
					{/each}
				</ol>
				<button id="clearwednesday" on:click={clearWednesdaysTallys}>Clear Wednesday's Tally's</button>
			</TableBodyCell>
			<TableBodyCell>
				<button id="thursdaytally" on:click={appendThursdayTally}>Add Thursday Tally</button>
				<ol id="thursdaycount">
					{#each thursdaytally as i}
						<li class="thursday"></li>
					{/each}
				</ol>
				<button id="clearthursday" on:click={clearThursdaysTallys}>Clear Thursday's Tally's</button>
			</TableBodyCell>
			<TableBodyCell>
				<button id="fridaytally" on:click={appendFridayTally}>Add Friday Tally</button>
				<ol id="fridaycount">
					{#each fridaytally as i}
						<li class="friday"></li>
					{/each}
				</ol>
				<button id="clearfriday" on:click={clearFridaysTallys}>Clear Friday's Tally's</button>
			</TableBodyCell>
			<TableBodyCell>
				<button id="saturdaytally" on:click={appendSaturdayTally}>Add Saturday Tally</button>
				<ol id="saturdaycount">
					{#each saturdaytally as i}
						<li class="saturday"></li>
					{/each}
				</ol>
				<button id="clearsaturday" on:click={clearSaturdaysTallys}>Clear Saturday's Tally's</button>
			</TableBodyCell>
			<TableBodyCell>
				<button id="sundaytally" on:click={appendSundayTally}>Add Sunday Tally</button>
				<ol id="sundaycount">
					{#each sundaytally as i}
						<li class="sunday"></li>
					{/each}
				</ol>
				<button id="clearsunday" on:click={clearSundaysTallys}>Clear Sunday's Tally's</button>
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
