import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Imag from './Imag'

const MidPart = () => {
    const dogs = useSelector(state => state.dogList)
    const[dogList,setDogList] = useState([])
    useEffect(()=>{
        setDogList(dogs)
    },[dogs])
    return (
        <Container>
            {
                dogList.map((dog:any)=><Imag key = {dog.id} dog = {dog}/>)
            }
        </Container>
  )
}

const Container = styled.div({
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    borderBottom:'1px solid #DADADA',
  })

export default MidPart