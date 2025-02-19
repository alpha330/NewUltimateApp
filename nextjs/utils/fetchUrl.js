
const fetchUrl =  async({url,method = "GET"}) =>{
  const absoluteUrl = `${process.env.NEXT_PUBLIC_ABSOLUTE_URL}${url}`
  return new Promise((resolve) => {
    setTimeout(async()=>{
      const response = await fetch(absoluteUrl,{
        method,
      })
      resolve(await response.json())
    },3000)
  })
}

export default fetchUrl
