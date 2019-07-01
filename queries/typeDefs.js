const answerType = `type Answer {
	id: ID,
	label: String
}`

const questionType = `type Question {
  id: ID
	label: String
	type: String
  category: String
  answers: [Answer]
}`

const questionsTypeDef = `
  ${answerType}
  ${questionType}
`

const typeDefs = `
  ${questionsTypeDef}
  type Query {
  	getQuestions: [Question]
  }
`

module.exports = typeDefs