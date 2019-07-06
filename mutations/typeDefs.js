const answerInputType = `input AnswerInput {
	questionId: Int
	answerId: Int
}`

const resultType = `type Result {
	category: String
  value: Float
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