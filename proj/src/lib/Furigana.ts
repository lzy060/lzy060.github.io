/* eslint-disable */

import { Kuroshiro, KuroshiroAnalyzerKuromoji } from "kuroshiro-browser"

const kuroshiro = new Kuroshiro();
kuroshiro.init(new KuroshiroAnalyzerKuromoji({ dictPath: "/dict" }))
    .then(function () {
        Furigana.isLoaded = true
        Furigana.onLoadedListeners.forEach((fn: TCallBack) => {
            fn(kuroshiro)
        })
        return kuroshiro.convert("感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！", { mode: "furigana", to: "hiragana" })
    })
    .then(function (result: any) {
        console.log(result);
    })

type TCallBack = (convertor: any) => void

const Furigana = {
    isLoaded: false,
    onLoadedListeners: [] as TCallBack[],
    addOnLoadedListener: (c: TCallBack) => {
        if (Furigana.isLoaded) {
            c(kuroshiro);
            return;
        }
        Furigana.onLoadedListeners.push(c)
    },
    removeOnLoadedListener: (c: TCallBack) => {
        Furigana.onLoadedListeners = Furigana.onLoadedListeners.filter((it: TCallBack) => it !== c);
    },
}

export default Furigana

