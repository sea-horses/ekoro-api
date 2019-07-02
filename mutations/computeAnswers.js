function computeAnswers(answers) {
	return [
		{ category: "HOME", value: 3},
		{ category: "ATMOSPHERE", value: 2},
		{ category: "ANIMALS", value: 4},
		{ category: "PLANTS", value: 3},
		{ category: "SEA", value: 3}
	]
}

module.exports = {
	Mutation: {
		computeAnswers
	}
}