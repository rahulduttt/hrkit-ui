<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { currentUser, pb } from '$lib/pocketbase';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">HRKit</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#if $currentUser}
				<li><a href="/">{$currentUser.email}</a></li>
				<li>
					<form
						method="POST"
						action="/logout"
						use:enhance={() => {
							return async ({ result }) => {
								pb.authStore.clear();
								await applyAction(result);
							};
						}}
					>
						<button>Log out</button>
					</form>
				</li>
			{:else}
				<li><a href="/login">Log in</a></li>
				<li><a href="/register">Register</a></li>
			{/if}
		</ul>
	</div>
</div>
