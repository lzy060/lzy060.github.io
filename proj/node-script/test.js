import fs from 'fs'
const run = async () => {
    const data = fs.readFileSync(`../public/yq-kanji.json`, 'utf-8');
    const list = JSON.parse(data)
    console.log(list.length)



    const csv_lines = []
    list.forEach((it) => {
        const {Kanji, Reading, Definition, Examples, Lesson} = it
        console.log(Examples)
        csv_lines.push(`${Kanji},${Reading},${Definition},${Lesson}`)
        Examples?.forEach((ep) => {
            const {Example, Reading, Definition} = ep
            csv_lines.push(`${Example},${Reading},${Definition}`)
        })
        
    });


    fs.writeFileSync(`./kanji317.csv`, csv_lines.join('\n'))
}


run()
