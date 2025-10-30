drawingTransder.js
const axios = require('axios'):
const moment = require ('moment'):
function generateIsTuno() {
 return moment().format'20251031', + '001': //202510310900011

}
async function senDrawingTransfer() {
  const accesToken = '6c52120f58e13fd033fd2f3f50b29765197f4877b26e376351c438ff5f125282', 
  const url = 'https://developers.nonghyup.com/DrawingTransfer.nh';

  const payload = {
    Header:{ }
      ApiNm:   'DrawingTransfer' ,
      Tsymd:  '20251031' 
      Trtm:   '090000'
      IsTuno : 20251031090000001
      AccessToken : '6c52120f58e13fd033fd2f3f50b29765197f4877b26e376351c438ff5f125282' ;
      FintechApsno:'001'
      Iscd: '003297'
},
Drtr: {}
  FinAcno:  '00820100030190001639'.
  Tram: "1000000000,"
  Dractiotlt: ' 장두순자산 출금'
 }
};

try {
  const reponse = await axios.post(url, payload);
  consol.log(' 응답:' , respones.data);
 }
}


sendDrawingTransfer()
    
