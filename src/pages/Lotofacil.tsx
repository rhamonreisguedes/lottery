import React from 'react'
import lotofacil from '../images/lotofacil.png'
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import { useState } from 'react';


type Props = {}

const Lotofacil = (props: Props) => {

  const [qty, setQty] = useState(1);

  const minus = () => {
    if(qty > 1){
      setQty(qty - 1);
    }
  }

  const plus = () => {
    setQty(qty + 1)
  }

  return (
    <Grid container style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Grid item xs={12} md={7} className='pb-3 md:py-3'>
        <img src={lotofacil} alt='megasena-logo'/>
      </Grid>
      <Grid item>
        <p className='text-xl md:text-4xl'>Quantos jogos deseja realizar?</p>
      </Grid>
      <Grid item>
        <Button onClick={minus}>-</Button>
        <span>{qty}</span>
        <Button onClick={plus}>+</Button>
      </Grid>
      <Grid item>
        <Button>Jogar!</Button>
      </Grid>

    </Grid>
  )
}

export default Lotofacil