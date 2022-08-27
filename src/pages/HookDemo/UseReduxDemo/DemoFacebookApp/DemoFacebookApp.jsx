import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../../../redux/reducers/facebookReducer'

export default function DemoFacebookApp() {
    const {arrComment} = useSelector(state => state.facebookReducer)
    const userComment = useRef({name:"",content:""})
    const dispatch = useDispatch()
    const renderComment = () =>{
        return arrComment.map((comment,index)=>{
            return <div className="row" key={index}>
                    <div className="col-2">
                        <img src={`https://i.pravatar.cc?u=${comment.name}`} alt="avatar" width={100}/>
                    </div>
                    <div className="col-10">
                        <h3 className='text-danger'>{comment.name}</h3>
                        <p>{comment.content}</p>
                    </div>
                </div>
        })
    }
    const handleChangeInput = (e) =>{
        const {id,value} = e.target
        userComment.current[id] = value
        console.log(userComment)

    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const action = addComment(userComment.current)
        dispatch(action)
    }
  return (
    <div className='container'>
        <h3>Demo Facebook App</h3>
        <div className="card">
            <div className="card-header">
                {renderComment()}
            </div>
            <div className="card-body">
                <form className='frm' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <p>name</p>
                        <input className='form-control' id='name' onInput={handleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <p>content</p>
                        <input className='form-control' id="content" onInput={handleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-success mt-2'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
