import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Imag from './Imag'

const Footer = () => {
    const dogs = useSelector(state=>state.dogList)
    const [fav,setFav] = useState([]) 
    useEffect(()=>{
        let t = dogs.filter(dog=>{
            return (dog.isFav)
        })
        setFav([...t])
    },[dogs])
  return (
    <Container>
        {
            fav.map((dog:any)=><Imag key = {dog.id} dog = {dog}/>)
        }
    </Container>
  )
}

const Container = styled.div({
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between'
  })


export default Footer