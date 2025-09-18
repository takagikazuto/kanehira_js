import * as myModule from './module.js';
export * from './module.js';

//使う要素
// let  monster, textArea, choice_ul, next;

export function scene1(monster, textArea, choice_ul, next) {
  // 貰った引数の値を隠す
  myModule.hideElements([monster, textArea, choice_ul, next]);
};

export function scene2(wrapper, textArea, startButton,title) {
  myModule.hideElements([startButton,title]); //startButtonを隠す
  wrapper.style.backgroundColor = "black"; //背景黒
  textArea.style.display = "block"; //隠してたtextAreaを表示
  //テキスト次処理
};

export function scene3(wrapper, p, startP) {
  //基本シーンデータは初手で記述
  //テキストデータが変更するかもだからlet
  const data = [
    "あなた:「...朝か、頭痛が痛い」"
  ]; 
  let num = 0; //要素初期値

  //クリックイベント
  //startPの要素を消す
  startP.style.display = "none"; // startPを隠す
  //背景画像変更
  $(".wrapper")
  .css({
    backgroundImage: "url('image/room.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "none"
  })
  .fadeIn(2000);
  p.textContent = data[num]; // 現在のテキストをpに入れる
}

export function scene4(textArea,p) {
  const data = [
    "システム：あなたは二日酔いの影響で最悪の寝覚めです",
    "システム:現在 PM:10:30",
    "システム:目が覚めてスマホを取ろうと横をむいたら見慣れない生物がいた",
    "あなた:「あぁ　夢か」",
    "システム:あなたはそう呟いて二度寝をした"
  ]; 

  let num = -1; //要素初期値
  //p.textContent = data[num]; // 現在のテキストをpに入れる
  //num++; // numを増やす
  //クリックイベント
  textArea.addEventListener("click", () => {
    num++; // numを増やす
    p.textAreaContent = data[num]; // 次のテキストをpに入れる
  });
}