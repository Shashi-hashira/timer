import React from 'react'
import { Grid } from '@mui/material'
import Item from './Item'

export default function Albums() {
  return (
    <div>
        <Grid container spacing={2}>
  <Grid xs={12}>
    <img src={"./public/Images/banner1.jpg"} />
  </Grid>
  <Grid item xs={6}>
  <Item  src="" />
  </Grid>
  <Grid item xs={6}>
  <Item  src="" />
  </Grid>
  <Grid item xs={6}>
  <Item  src="" />
  </Grid>
  <Grid item xs={6}>
  <Item  src="" />
  </Grid>
  <Grid item xs={4}>
  <Item  src="" />
  </Grid>
  <Grid item xs={4}>
  <Item  src="" />
  </Grid>
  <Grid item xs={4}>
  <Item  src="" />
  </Grid>
 
</Grid>      
    </div>
  )
}
