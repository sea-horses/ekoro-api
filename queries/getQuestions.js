function getQuestions() {
	return require('../data/questions.json')
}

module.exports = {
	Query: {
		getQuestions
	}
}
