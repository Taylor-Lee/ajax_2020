var http = require('http');
var fs = require('fs');

const promiseCall = {
  Yeaseul: [
    {
      content: '고객 취소/반품 확인',
      time: 202001101010
    },
    {
      content: '데이트',
      time: 202001221010
    },
  ],
  R: [
    {
      content: '교환 확인',
      time: 202001111540
    }
  ]
};

var app = http.createServer(async function(request,response){
  var url = request.url;
  if(request.url == '/'){
    url = '/index.html';
  }
  if(request.url == '/favicon.ico'){
    return response.writeHead(404);
  }
  if(request.url == '/promise/call'){
    await sleep(3000);
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify(promiseCall, null, 3));
  }
  if(request.url == '/3.html') {
    await sleep(3000);
  }

  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));

});

const init = async () => {
  for (let i=0; i<5; i++){
    console.log(1);
    await sleep(1000);
    console.log(2);
  }
};

const sleep = (ms) => {
  return new Promise(resolve=>{
    setTimeout(resolve,ms)
  })
}
// app.get('/promise/call', (req, res) => {
  // return JSON.stringify({
  //   promiseCall: {
  //     Yeaseul: [
  //       {
  //         content: '고객 취소/반품 확인',
  //         time: 202001101010
  //       },
  //       {
  //         content: '데이트',
  //         time: 202001221010
  //       },
  //     ],
  //     R: [
  //       {
  //         content: '교환 확인',
  //         time: 202001111540
  //       }
  //     ]
  //   }
  // });
// });

app.listen(3000);
