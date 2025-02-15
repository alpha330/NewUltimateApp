
const fetchUrl =  async({url,method = "GET"}) =>{
  return new Promise((resolve) => {
    setTimeout(async()=>{
      const response = await fetch(url,{
        method,
      })
      resolve(await response.json())
    },3000)
  })
}

export default fetchUrl
