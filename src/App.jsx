import QRcode from 'qrcode';
import { useState } from 'react';


function App() {
  const [url,setUrl] = useState('');
  const [qrcode,setQrcode] = useState('');

  const generateQRcode = ()=>{
      if (!url.trim()) {
    alert('Please enter a valid URL');
    return;
  }
    QRcode.toDataURL(url,{
      width:800,
      margin:1,
      color:{
        dark:'#335460ff'
      }
    },
      (err,url)=>{
      if(err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }
  return (
    <div className='app'>
      <h1>QR-CODE-GENERATOR</h1>
      <input value={url}
      onChange={(e)=> setUrl(e.target.value)}
       placeholder="e.g:https://example.com"
        type="text"
         />
      <button onClick={generateQRcode}>GENERATE</button>
      {qrcode && 
      <>
        <img src={qrcode} alt="" />
        <a href={qrcode} download='qrcode.png'>Download</a>
      </>
      
      }
      
    </div>
  )
}

export default App;
