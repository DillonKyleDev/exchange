import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addUser,
  removeUser
} from './userSlice'

export function User() {
  const count = useSelector(addUser)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button          
          aria-label="Increment value"
          onClick={() => dispatch(addUser())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(removeUser())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}

export default User;