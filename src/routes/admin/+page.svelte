<script lang="ts">
	import ConfirmBox from '$lib/components/ConfirmBox.svelte';
	import Head from '$lib/components/Head.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Pesquisa from '$lib/components/Pesquisa.svelte';
	import { onMount } from 'svelte';
	import { slide, fly, fade } from 'svelte/transition';

	let expectedSecret: any;
	let auth = true;
	let edit: boolean = false;
	let opedit: boolean = false;
	let opedit2: boolean = false;
	let ramalEdit: Ramal;

	let authorized = false;
	let adminSecret: string | null = null; // Variável para armazenar o "secret" da página de login

	// Define um bloco de código que será executado após o componente montar
	onMount(() => {
		// Cria uma instância de URLSearchParams a partir da string de consulta na URL
		const params = new URLSearchParams(window.location.search);
		// Obtém o valor do parâmetro 'secret' da URL
		adminSecret = params.get('secret');

		// Obtém o "secret" do armazenamento local
		expectedSecret = localStorage.getItem('adminSecret');
		// Verifica se o valor do parâmetro 'secret' é igual ao "secret" esperado
		authorized = adminSecret !== null && adminSecret === expectedSecret;
	});

	function open() {
		auth = false;
	}

	export let data: any;
	export let pesquisa = '';
</script>

{#if authorized}
	{#if edit}
		<div
			transition:slide={{ axis: 'x' }}
			class=" absolute right-0 transform translate-y-[15%] z-50 drop-shadow-lg rounded-lg border border-[#27293a]"
		>
			<div class="flex w-full items-center rounded-md p-2">
				<button
					type="button"
					on:click={() => {
						edit = false;
					}}
				>
					<svg
						class="text-black"
						xmlns="http://www.w3.org/2000/svg"
						height="1.5em"
						fill="currentColor"
						viewBox="0 0 384 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
						/></svg
					>
				</button>
				<div class="ml-10 text-black text-xl font-extrabold" />
			</div>
			<div class="w-full flex justify-around bg-theme-base">
				<form
					class="w-full"
					action="?/updateramais&id={ramalEdit.id}&secret={expectedSecret}"
					method="POST"
				>
					<div class="flex-col flex w-full h-full text-black items-center font-extrabold">
						<div class="flex flex-col justify-center items-center p-4">
							<label class="text-black p-2" for="org">Org</label>
							<input
								class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
								type="text"
								name="org"
								required
								placeholder={ramalEdit.org}
							/>
						</div>

						<div class="flex flex-col justify-center items-center p-4">
							<label class="text-black p-2" for="org">Unidade</label>
							<select
								class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
								name="unidade"
								required
							>
								<option value="" />
								{#each data.options.unidade as unidade}
									<option>{unidade}</option>
								{/each}
							</select>
						</div>
						<div class="flex flex-col justify-center items-center p-4">
							<label class="text-black p-2" for="org">Setor</label>
							<select
								class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
								name="setor"
								required
							>
								<option value="" />
								{#each data.options.setor as setor}
									<option>{setor}</option>
								{/each}
							</select>
						</div>
						<div class="flex flex-col justify-center items-center p-4">
							<label class="text-black p-2" for="org">User</label>
							<input
								class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
								type="text"
								name="user"
								required
								placeholder={ramalEdit.user}
							/>
						</div>
						<div class="flex flex-col justify-center items-center p-4">
							<label class="text-black p-2" for="org">Ramal</label>
							<input
								class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
								type="text"
								pattern="[0-9/]*"
								name="ramal"
								required
								placeholder={ramalEdit.ramal}
							/>
						</div>
						<div class="flex flex-col justify-center items-center p-4">
							<label class="text-black p-2" for="org">servico</label>
							<input
								class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
								type="text"
								name="servico"
								required
								placeholder={ramalEdit.servico}
							/>
						</div>
						<div class="flex m-6 justify-center items-center border border-[#27293a]">
							<div class="flex justify-evenly items-center rounded-md p-2 bg-green-300">
								<button type="submit">Atualizar</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	{/if}

	{#if opedit}
		<div
			transition:slide={{ axis: 'x' }}
			class=" absolute right-0 transform translate-y-[15%] z-50 drop-shadow-lg rounded-lg border border-[#27293a]"
		>
			<div class="flex w-full items-center rounded-md p-2">
				<button
					type="button"
					on:click={() => {
						opedit = false;
					}}
				>
					<svg
						class="text-black"
						xmlns="http://www.w3.org/2000/svg"
						height="1.5em"
						fill="currentColor"
						viewBox="0 0 384 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
						/></svg
					>
				</button>
			</div>

			<div class="w-full flex justify-around bg-theme-base max-h-[600px] overflow-y-auto">
				<div class="flex-col flex w-full h-full text-black items-center font-extrabold">
					<span class="text-black p-2"> Unidade</span>
					<div class="">
						<form
							action="?/getaddUnidade&secret={expectedSecret}"
							method="POST"
							class="flex justify-center items-center p-4"
						>
							<input
								class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
								type="text"
								name="input"
							/>
							<button class=" bg-green-300 rounded-md m-4 p-1" type="submit">
								<svg
									class="h-[1.3em]"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
										d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
									/></svg
								>
							</button>
						</form>
					</div>
					{#each data.options.unidade as unidades, index}
						<form action="?/getChamadasUnidade&index={index}&secret={expectedSecret}" method="POST">
							<div class="flex justify-center items-center p-4">
								<input
									class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
									type="text"
									value=""
									name="input"
									placeholder={unidades}
								/>
								<button class=" m-2" type="submit">
									<svg
										class="h-[1.2em] text-red-300"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentCOlor"
										viewBox="0 0 448 512"
										><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
											d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
										/></svg
									>
								</button>
								<button
									type="submit"
									formaction="?/getalterarUnidade&index={index}&secret={expectedSecret}"
								>
									<svg
										class="h-[1.2em] text-blue-300"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentCOlor"
										viewBox="0 0 512 512"
										><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
											d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
										/></svg
									>
								</button>
							</div>
						</form>
					{/each}
				</div>
			</div>
		</div>
	{/if}
	{#if opedit2}
		<div
			transition:slide={{ axis: 'x' }}
			class=" absolute right-0 transform translate-y-[15%] z-50 drop-shadow-lg rounded-lg border border-[#27293a]"
		>
			<div class="flex w-full items-center rounded-md p-2">
				<button
					type="button"
					on:click={() => {
						opedit2 = false;
					}}
				>
					<svg
						class="text-black"
						xmlns="http://www.w3.org/2000/svg"
						height="1.5em"
						fill="currentColor"
						viewBox="0 0 384 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
						/></svg
					>
				</button>
			</div>

			<div class="w-full flex justify-around bg-white max-h-[600px] overflow-y-auto">
				<div class="flex-col flex w-full h-full text-black items-center font-extrabold">
					<span class="text-black p-2"> Setor</span>
					<div class="">
						<form
							action="?/getaddsetor&secret={expectedSecret}"
							method="POST"
							class="flex justify-center items-center p-4"
						>
							<input
								class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
								type="text"
								name="input"
							/>
							<button class=" bg-green-300 rounded-md m-4 p-1" type="submit">
								<svg
									class="h-[1.3em]"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
										d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
									/></svg
								>
							</button>
						</form>
					</div>
					{#each data.options.setor as setor, index}
						<form action="?/getChamadasSetor&index={index}&secret={expectedSecret}" method="POST">
							<div class="flex justify-center items-center p-4">
								<input
									class="uppercase w-[85%] h-8 rounded-lg text-black border border-[#27293a]"
									type="text"
									value={setor}
									name="input"
								/>
								<button class=" m-2" type="submit">
									<svg
										class="h-[1.2em] text-red-300"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentCOlor"
										viewBox="0 0 448 512"
										><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
											d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
										/></svg
									>
								</button>
								<button
									type="submit"
									formaction="?/getalterarSetor&index={index}&secret={expectedSecret}"
								>
									<svg
										class="h-[1.2em] text-blue-300"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentCOlor"
										viewBox="0 0 512 512"
										><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
											d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
										/></svg
									>
								</button>
							</div>
						</form>
					{/each}
				</div>
			</div>
		</div>
	{/if}
	<Nav bind:pesquisa>
		<a
			href="/"
			class="mr-auto bg-theme-soft p-4 m-2 w-[15%] hover:bg-theme-soft text-center flex justify-center rounded-md active:scale-90 duration-100"
			>NORMAL</a
		></Nav
	>
	<div class="bg-theme-base text-black h-full w-full m-0 mt-20 flex flex-col items-center">
		<div class=" w-[70%] h-[5em] ml-4 mr-4 p-0.5">
			<form action="?/createRamais&secret={expectedSecret}" method="POST">
				{#if !auth}
					<ConfirmBox bind:auth />
				{/if}
				<div class=" drop-shadow-lg rounded-lg flex flex-col h-[90vh] items-center text-black">
					<div class="flex flex-col w-full bg-gray-300">
						<Head bind:opedit bind:opedit2 width="w-[14%]">
							<span
								class="h-full flex justify-center items-center w-[14%] p-4 font-bold uppercase text-xl"
							/>
						</Head>
						<div class="flex justify-around bg-theme-base border border-[#27293a]">
							<div class="flex w-full h-full text-black">
								<div class="flex justify-center items-center w-[14%] p-4">
									<input
										class="uppercase w-[85%] h-8 rounded-lg border border-[#27293a] text-black"
										type="text"
										name="org"
										required
									/>
								</div>

								<div class="flex justify-center items-center w-[14%] p-4">
									<select
										class="uppercase w-[85%] h-8 rounded-lg border border-[#27293a] text-black"
										name="unidade"
										required
									>
										<option value="" />
										{#each data.options.unidade as unidade}
											<option>{unidade}</option>
										{/each}
									</select>
								</div>

								<div class="flex justify-center items-center w-[14%] p-4">
									<select
										class="uppercase w-[85%] h-8 rounded-lg border border-[#27293a] text-black"
										name="setor"
										required
									>
										<option value="" />
										{#each data.options.setor as setor}
											<option>{setor}</option>
										{/each}
									</select>
								</div>
								<div class="flex justify-center items-center w-[14%] p-4">
									<input
										class="uppercase w-[85%] h-8 rounded-lg border border-[#27293a] text-black"
										type="text"
										name="user"
										required
									/>
								</div>
								<div class="flex justify-center items-center w-[14%] p-4">
									<input
										class="uppercase w-[85%] h-8 rounded-lg border border-[#27293a] text-black"
										type="text"
										pattern="[0-9]+(/[0-9]+)?"
										name="ramal"
										required
									/>
								</div>
								<div class="flex justify-center items-center w-[14%] p-4">
									<input
										class="uppercase w-[85%] h-8 rounded-lg border border-[#27293a] text-black"
										type="text"
										name="servico"
										required
									/>
								</div>

								<div class="flex justify-center p-4 w-[14%] items-center text-black">
									<div class="flex justify-evenly items-center w-1/1 rounded-md p-2 bg-green-300">
										<svg
											class="h-[1.3em]"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 448 512"
											><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
												d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
											/></svg
										>
										<button type="button" on:click={open}>Adicionar</button>
									</div>
								</div>
							</div>
						</div>

						<Pesquisa
							bind:data
							bind:pesquisa
							bind:edit
							bind:ramalEdit
							width="w-[14%]"
							width2="w-1/2"
							isAdm={true}
							{expectedSecret}
						/>
					</div>
				</div>
			</form>
		</div>
	</div>
{:else}
	<div />
{/if}
