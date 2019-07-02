const answerInputType = `input AnswerInput {
	questionId: ID
	answerId: ID
}`

const resultType = `type Result {
	category: String
  value: Int
}`

const computeAnswerTypeDef = `
  ${answerInputType}
  ${resultType}
`

const typeDefs = `
  ${computeAnswerTypeDef}
  type Mutation {
  	computeAnswers(answers: [AnswerInput]): [Result]
  }
`

module.exports = typeDefs