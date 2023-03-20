<script lang="ts">
    import type { PageData } from './$types';
    import {page} from '$app/stores'
    export let data: PageData;
</script>
{#if $page.url.searchParams.get('signedin')==='false'}
<h1>
    Please sign in to access the dashboard.
</h1>
{/if}
<h1 style="font-style: italic;">Signin logic goes here...</h1>

