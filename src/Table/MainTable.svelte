<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	import Days from '../Days/Days.svelte';
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
			<Days day="Monday" />
			<Days day="Tuesday" />
			<Days day="Wednesday" />
			<Days day="Thursday" />
			<Days day="Friday" />
			<Days day="Saturday" />
			<Days day="Sunday" />
		</TableBodyRow>
	</TableBody>
</Table>
