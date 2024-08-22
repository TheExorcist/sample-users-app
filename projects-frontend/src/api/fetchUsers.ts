const url = `http://localhost:3000/users`

export const fetchUsers = async () => {
  try {
    const response  = await fetch(url)

    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw('Invalid request')
    }
    
  } catch (error) {

  }
}
