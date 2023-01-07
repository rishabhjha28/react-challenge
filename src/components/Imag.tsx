import styled from '@emotion/styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import Heart from './Heart'

const Imag = ({dog}) => {
    const dispatch = useDispatch()
    const updateFav =()=>{
        dispatch({type:"UPDATE_FAV_DOG",payload:dog.id})
  }
    return (
    <Container onClick={updateFav}>
        <Img src={dog.link} alt="dog" />
        <Div>
            <Heart  icon={dog.isFav?"redHeartIcon":'whiteHeartIcon'} alt={dog.isFav?"red heart icon":"white heart icon"} />
        </Div>
    </Container>
  )
}
const Div = styled.div({
    position:'relative',
    right:'22px',
    top:'85px',
})
const Container = styled.div({
    height:'200px',
    width:'170px',
    marginBottom:'30px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
})
const Img = styled.img({
    width:'170px',
    height:'190px',
})
export default Imag