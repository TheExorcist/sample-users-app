interface UserOptions {
  userId: number
}
const getUrl = (userId: number) => `http://localhost:3000/users/${userId}/projects`

export const fetchUserProject = async (userId: number) => {
  try {
    const response  = await fetch(getUrl(userId))

    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.log(err)
  }
}