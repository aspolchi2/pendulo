import React from 'react'
import { OfferingCardList } from './OfferingCardList'

export const Offering = () => {
  return (
    <section className='bg-black'>
      <h3 className=" text-2xl text-white">¿POR QUÉ CREAMOS PÉNDULO?</h3>
        <hr className=" mt-5 text-white" />
        <OfferingCardList />
    </section>
  )
}
