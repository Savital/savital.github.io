const app = new Vue({
	el: '#app',
	data() {
		return {
			current: {
				name: '',
				character: '',
				image: '',
				quote: '',
			},
			bryan: {
				name: "Bryan Cranston",
				character: "Howard Beale",
				quote: "All I know is, you've got to get mad. You've got to say, 'I'm a human being, goddamn it. My life has value.'",
				image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/262582/bryan-cranston-narrow.jpeg'
			},
			tatiana: {
				name: "Tatiana Maslany",
				character: "Diana Christensen",
				quote: "If you're gonna hustle, do it right.",
				image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/262582/tatiana.jpeg"
			},
			tony: {
				name: "Tony Goldwyn",
				character: "Max Schumacher",
				quote: "He's saying that life is bullshit, and it is, so what are you screaming about?",
				image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/262582/tony-goldwyn.jpeg"
			}
		}
	},
	methods: {
		setCurrent(selectedName) {
			this.current.name = this[selectedName]['name']
			this.current.bio = this[selectedName]['bio']
			this.current.quote = this[selectedName]['quote']
			this.current.image = this[selectedName]['image']
			this.current.character = this[selectedName]['character']
		}
	},
	mounted() {
		this.setCurrent('bryan')
	}
})
