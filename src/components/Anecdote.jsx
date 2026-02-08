const Anecdote = (props) => {
  const { anecdote } = props
  const { content, votes, info } = anecdote
  return (
    <>
    <h1>{content}</h1>
    <p>has {votes} votes</p>
    <p>for more info see <a href={info}>{info}</a></p>
    </>
  )
}

export default Anecdote
