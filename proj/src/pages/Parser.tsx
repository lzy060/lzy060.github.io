/* eslint-disable */
import { useEffect, useState } from "react"
import Styles from './SNT.module.less'
import TaskLoop from "../lib/TaskLoop"
import { kanaData, chartData, dakuonMapping } from '../lib/Kana'


interface IProps {
  listName?: string;
}
const SNT: React.FC<IProps> = (props: IProps) => {

  const allSounds = chartData.allSounds
  const youon = chartData.youon

  const allKanas = [...allSounds.flat(2), ...youon.flat(2)].map((it) => {
    return it.split(' ')[0]
  }).filter((it) => it.includes('/'));

  const allHiragana = allKanas.map((it) => it.split('/')[0])
  const allkatagana = allKanas.map((it) => it.split('/')[1])


  console.log(1111, {allHiragana, allkatagana})

  const { listName } = props;
  const [list, setList] = useState<string[][]>([])
  useEffect(() => {
    const requestData = async () => {
      const kuromoji: any = (window as any).kuromoji;
      kuromoji?.builder({ dicPath: "kuromoji.js/dict/" }).build(function (err: any, tokenizer: any) {
        // tokenizer is ready

        const path = tokenizer.tokenize("崖を登り呼ぶよ「さあ行こうぜ」3");
        const list: string[][] = [];
        const map: any = {};
        path.forEach((element: any) => {
          const { pronunciation, surface_form, pos } = element;
          if (!map[surface_form] && pos !== '記号' && pronunciation && !allkatagana.includes(surface_form) && !allHiragana.includes(surface_form)) {
            list.push([surface_form, pronunciation])
          }
          map[surface_form] = element
          console.log(element)
        });
        setList(list)
        // console.log(1111, path);
      });
    }
    requestData()
  }, [listName])


  const isRuby = listName?.includes('ruby')


  return (
    <div className={Styles.listContainer}>
      <ol className={Styles.sentenceList}>
        {
          list.map((it_, index) => {
            const [it, ruby] = it_
            return (
              <li className={Styles.sentenceItem} onClick={
                (e) => {
                  const dom = e.target as HTMLElement
                  dom.style = 'background: transparent';
                  e.stopPropagation();
                  TaskLoop.addTask(it);
                  TaskLoop.tryStart();
                }
              }>
                <span className={Styles.index}>{index + 1}</span>
                {
                  isRuby && (<span className={Styles.text} dangerouslySetInnerHTML={{ __html: ruby }}></span>)
                }
                {
                  !isRuby && (<span className={Styles.text}>{it_.join(',  ')}</span>)
                }
                <span className={Styles.more} onClick={
                  (e) => {
                    e.stopPropagation();
                    window.open(`https://jpdb.io/search?q=${it}`, '_blank')
                  }
                }>{'→'}</span>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default SNT
