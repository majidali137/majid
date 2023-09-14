import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = url => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url)
      .then(response => {
        setPosts(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError("Sorry, something went wrong")
        setIsLoading(false)
      })
  }, [url])

  return { posts, error, isLoading }
}

export default useFetch