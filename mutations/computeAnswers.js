const { getQuestionById, getAnswerById } = require('../helpers/questions')

function computeAnswers(_, args) {
	if (!args.answers || args.answers.length <= 0) {
		return []
	}
	const questions = require('../data/questions.json')
	const resultMap = args.answers
		.reduce((acc, curr) => {
			const question = getQuestionById(questions, curr.questionId)
			const answer = question && question.answers
				? getAnswerById(question.answers, curr.answerId)
				: null
			if (!question || !answer) {
				// TODO : unknow question/answer, throw error (400) handle error properly
				return []
			}
			if (!acc[question.category]) {
				acc[question.category] = {
					category: question.category,
					addedWeight: 0,
					nbAnswers: 0
				}
			}
			acc[question.category].addedWeight = acc[question.category].addedWeight + answer.weight
			acc[question.category].nbAnswers = acc[question.category].nbAnswers + 1
			return acc
	}, {})
	return Object
		.keys(resultMap)
		.map(resultKey => ({
			category: resultMap[resultKey].category,
			value: resultMap[resultKey].addedWeight / resultMap[resultKey].nbAnswers 
		}))
}

module.exports = {
	Mutation: {
		computeAnswers
	}
}