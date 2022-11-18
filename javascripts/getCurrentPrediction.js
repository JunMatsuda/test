webgazer.begin();

var mstorage = sessionStorage;
var mid = 0;
var kstorage = sessionStorage;
var kid = 0;

const mlocalforage = localforage.createInstance({
  name : 'MouseEvent', 
});
const klocalforage = localforage.createInstance({
  name : 'KeyEvent', 
});

document.addEventListener('keypress', keypress_event);

window.onclick = async function(e){
  //マウスカーソルの座標を取得
  var mx = e.clientX;
  var my = e.clientY;

  //視点の座標を取得
  var prediction = await webgazer.getCurrentPrediction();
  if (prediction) {
    var gx = prediction.x;
    var gy = prediction.y;
  }
  //console.log('mx:', mx, 'my:', my);
  //console.log('gx:', gx, 'gy:', gy);
  mid++;
  var mdata = {
    mx: mx,
    my: my,
    gx: gx,
    gy: gy
  }
  mstorage.setItem('mdata'+mid, JSON.stringify(mdata));
  mlocalforage.setItem('mdata'+mid, mdata);
}

async function keypress_event(e) {
  //押されたキーのコードを取得
  var key = e.code;

  //視点の座標を取得
  var prediction = await webgazer.getCurrentPrediction();
  if (prediction) {
    var gx = prediction.x;
    var gy = prediction.y;
  }
  //console.log('key:', key, 'gx:', gx, 'gy:', gy);
  kid++;
  var kdata = {
    gx: gx,
    gy: gy
  }
  kstorage.setItem('kdata'+kid, JSON.stringify(kdata));
  klocalforage.setItem('kdata'+kid, kdata);
}
