import React from 'react'

const Practice = () => {
    const arr = ["apple", "banana", "mango", "banana", "guava", "guava", "banana"]
    const newArr = [...new Set(arr)]
    console.log(newArr)
  return (
    <div>
      
    </div>
  )
}

export default Practice
