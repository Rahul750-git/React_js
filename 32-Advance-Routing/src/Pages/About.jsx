import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button
       onClick={() => {
          navigate('/')
        }}
        className="bg-red-600 rounded m-3 px-5 py-3 active:scale-95 cursor-pointer"
      >
        Return to Home Page
      </button>
      <h1>About page</h1>
    </div>
  )
}

export default About