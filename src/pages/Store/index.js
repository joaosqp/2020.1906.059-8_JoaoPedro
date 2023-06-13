import React, { useEffect, useState } from 'react'


export const Store = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fecthApi = async () => {
      const url = 'https://github.com/joaosqp/apiShop/blob/main/produtos.json'
      const response = await fetch(url)
      const objJson = await response.json()
      setData(objJson)
    }
    fecthApi()
  }, [])

  return (
    <div>
      <h1>Store</h1>
    </div>
  )

}
