import React from 'react'
import ImgNotFound from '../../asset/Computer display_Monochromatic.svg'

function NotFound() {
  return (
    <div className="text-center">
      <ImgNotFound src="../../asset/Computer display_Monochromatic.svg" width={500} height={250} />
      <h1 className="mt-5">Upsss! Movie Not Found</h1>
    </div>
  )
}

export default NotFound