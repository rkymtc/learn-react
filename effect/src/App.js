import React, { useEffect, useState } from 'react'

function App() {

  // STATE DEĞİŞTİĞİNDE COMPONENT TEKRAR RENDER OLUR!!!!
  const [sayac, setSayac] = useState(0);
  const [sayac2, setSayac2] = useState(0)

  console.log('Effect sample component rendered!!');

  //use effect component çağrıldığında SADECE 1 KERE ÇALIŞIR. Eğer dizi işareti var ve BOŞ ise bir kere çalışırım!!
  useEffect(() => {
    console.log('Boş dizi olan Use efffect çalıştı');
  }, [])


  //SADECE SAYAÇ DEĞİŞTİĞİNDE ÇALIŞIRIM
  useEffect(() => {

    console.log('Sadece sayaç state değiştiğinde çalışırım');

  }, [sayac])

  //ben de her state değişiminde çalışırım
  // useEffect(() => {
  //     console.log('dizisi olmayan use effect çalıştı');
  // })

  return (
    <>
      <div>
        <p>her state değişiminde çalışırım</p>
        <h1>SAYAC 1- {sayac}</h1>
        <button onClick={() => setSayac(sayac + 1)}>Sayac Arttır!</button>
      </div>
      <br></br>
      <hr></hr>
      <div>
        <h1>SAYAC 2 - {sayac2}</h1>
        <button onClick={() => setSayac2(sayac2 + 1)}>Sayac Arttır!</button>
      </div>


    </>
  )
}

export default App