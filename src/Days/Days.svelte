<script lang="ts">
    import {
		Button,
		Modal,
		TableBodyCell,
	} from 'flowbite-svelte';

	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';

	let { day }: {day: string} = $props();

	let popupModal = $state(false);
	
	let tally:number[] = $state([]);
	let count = 0;

    function appendTally() {
		tally.push(count++);
		tally = tally;
	}

    function clearTallys() {
		tally.length = 0;
	}
</script>

<TableBodyCell>
    <button id="add-tally" onclick={appendTally}>Add {day} Tally</button>
    <br>
    <ol id="count">
        {#each tally as i}
            <li class="tally"></li>
        {/each}
    </ol>
    <button id="clear-tally" onclick={() => (popupModal = true)}>Clear {day}'s Tally's</button>
    <Modal bind:open={popupModal} size="xs" autoclose>
        <div class="text-center">
          <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to clear these tally's <br> for {day}?</h3>
          <Button id="clearmonday" color="red" class="me-2" onclick={clearTallys}>Yes, I'm sure</Button>
          <Button color="alternative">No, cancel</Button>
        </div>
    </Modal>
</TableBodyCell>

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
		transform: rotate(300deg);
		height: 30px;
		position: relative;
		left: -15px;
		top: 5px;
		margin-right: 10px;
	}
</style>