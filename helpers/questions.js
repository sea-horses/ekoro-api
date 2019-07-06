function getQuestionById(questions, questionId) {	
	return questions.find(question => question.id === questionId)
}

function getAnswerById(answers, answerId) {
	return answers.find(answer => answer.id === answerId)
}

module.exports = {
	getQuestionById,
	getAnswerById
}