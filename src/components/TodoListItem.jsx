import React from 'react'

function TodoListItem({index, itemText, dlt}) {
  return (
    <li className="list-group-item list-group-item-warning d-flex justify-content-between align-items-center fs-5">{itemText} <button className="btn btn-danger" onClick={()=>{
        dlt(index)
    }}><i className="fa-solid fa-trash text-light"></i></button></li>
  )
}

export default TodoListItem