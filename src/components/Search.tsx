import styled from '@emotion/styled'
import axios from 'axios'
import React,{ FC, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import Heart from './Heart'

const Search: FC = () => {
  const dispatch = useDispatch()
  const [search,setSearch] = useState("")
  const [message,setMessage] = useState("")
  useEffect(()=>{
    setTimeout(() => {
      setMessage("")
    }, 3000);
  },[message])
  const searchDog = (e:any)=>{
    e.preventDefault()
    if(search){
      const url = `https://dog.ceo/api/breed/${search}/images/random/10`
      axios.get(url)
      .then(response=>{
        let t = response.data.message.map((element,index)=>({
          id:index,
          link:element,
          isFav:false,
        }))
        dispatch({type:"FETCH_DOGS",payload:t})
      })
      .catch(error=>{
        setMessage("sorry No dogs found")
      })
    }
  }
  return (
    <Container>
      {
        message.length > 0&&<div>{message}</div> 
      }
      <form onSubmit={searchDog}>
        <Input type="text" name="search" required autoFocus placeholder="Search for dog's breed" onChange={(e)=>setSearch(e.target.value)} value = {search}/>
        <Button type="submit"><Heart icon="searchIcon" alt="search icon"/> Search</Button>
      </form>
    </Container>
  )
}
const Container = styled.div({
  margin: '40px auto',
  height: '%',
  width: '560px',
})
const Input = styled.input({
  width:'455px',
  outline:'none',
  paddingLeft:'5px',
  height:'36px'
})  
const Button = styled.button({
  backgroundColor:'#0794E3',
  height:'36px',
  width:'105px',
  color:'white',
  cursor:'pointer'
})
export default Search