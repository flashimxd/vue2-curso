<template>
	<v-app>
		<Header />
		<v-content>
			<v-container>
				<v-subheader>
					<v-flex>
						<h1 class="display-6 font-weight-light">
						Painel de OS
					</h1>
					</v-flex>
					<v-flex>
				      <v-btn
						depressed
						color="primary"
						>
						Primary
					 </v-btn>
					</v-flex>
				</v-subheader>
				<router-view></router-view>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Header from './components/Header'
export default {
	components: { Header },
	created() {
		this.$store.dispatch('initStocks')
	}
}
</script>

<style>

</style>

