import fs from 'fs'

import Kuroshiro from "kuroshiro";
// Initialize kuroshiro with an instance of analyzer (You could check the [apidoc](#initanalyzer) for more information):
// For this example, you should npm install and import the kuromoji analyzer first
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
const jsonLines = [];
const file = '銀の龍の背に乗って'
const run = async () => {
    const kuroshiro = new Kuroshiro.default();
    const data = fs.readFileSync(`./${file}.txt`, 'utf-8').split('\n');
    // console.log(data)
    await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "../kuromoji.js-master/dict" }));

    for (let i = 0; i < data.length; i ++) {
        const it = data[i].split(',')[0]
        const result = await kuroshiro.convert(it, { mode: "furigana", to: "hiragana" });
        jsonLines.push(JSON.stringify([it, result]))

    }

    console.log(jsonLines)

    fs.writeFileSync(`./${file}_ruby.txt`, jsonLines.join('\n'))


}



run()
