import * as myModule from './slide.js';
import * as meModule from './module.js';

//使う変数宣言
let wrapper, title, imgWrapper, monster, startButton, textArea, p,startP, choice_ul, next;

//基本この中に処理を書いていく
document.addEventListener("DOMContentLoaded", () => {
  wrapper = document.querySelector(".wrapper");
  title = document.querySelector(".title");
  imgWrapper = document.querySelector(".img_wrapper");
  monster = document.querySelector(".monster");
  startButton = document.querySelector(".start_button");
  textArea = document.querySelector(".text_area");
  p = document.querySelector(".text_area p"); // pをリストとして取得
  startP = document.querySelector(".start_p"); // start_pを取得
  choice_ul = document.querySelector(".choice_ul");
  next = document.querySelector(".next");

  // 初期画面
  myModule.scene1(monster, textArea, choice_ul, next);

  //はじめるボタン押したらはじめる
  startButton.addEventListener("click", () => {
    //1日目 scene2 背景黒
    myModule.scene2(wrapper, textArea, startButton, title);
    // textArea.addEventListener("click", () => {
    //   //scene3 背景変わる
    //   myModule.scene3(wrapper, textArea, p, startP);
    //   //textAreaのクリックイベントを停止
    //   meModule.handleTextAreaClick(textArea);
    //   //ここでクリックイベントを無効にしてるから背景がフェ－ドインしないはず
    // });

    myModule.scene4(textArea, p); // scene4のテキストを表示
  });
});

//scene3は保留




