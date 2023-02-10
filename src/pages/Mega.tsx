import React from 'react'
import mega from '../images/mega.png'
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import { useState } from 'react';


type Props = {}

const Mega = (props: Props) => {

  const [qty, setQty] = useState(1);


  const minus = () => {
    if(qty > 1){
      setQty(qty - 1);
    }
  }

  const plus = () => {
    setQty(qty + 1)
  }

  const play = () => {
    for(let i =0; i < qty; i++){
      console.log(play)
    }
  }

  return (
    <Grid container style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Grid item xs={12} md={7} className='pb-3 md:py-3'>
        <img src={mega} alt='megasena-logo'/>
      </Grid>
        <p className='text-xl py-3 md:text-4xl'>Quantos jogos deseja realizar?</p>
      <div className='my-3'>
          <Button onClick={minus} variant="outlined">-</Button>
          <span className='p-5'>{qty}</span>
          <Button onClick={plus} variant="outlined">+</Button>
      </div>
      <Button variant="contained" onClick={play}>Jogar!</Button>


    </Grid>
  )
}

export default Mega