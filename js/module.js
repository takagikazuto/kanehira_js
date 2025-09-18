//要素を隠す関数 複数可
export function hideElements(elements) {
  //貰った要素をelに代入し、繰り返し隠す
  elements.forEach((el) => el.style.display = "none");
}

//イベントリスナーを無効にする
export function handleTextAreaClick(textArea) {
  textArea.removeEventListener("click", handleTextAreaClick);
}

//兼平を動かすための処理
