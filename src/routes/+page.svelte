<script lang="ts">
	import MainTable from "../Components/Table/MainTable.svelte";
	import PageData from "./$types"

	let { data }: { data: PageData } = $props();
	console.log("Data: ", data)
</script>

<MainTable />