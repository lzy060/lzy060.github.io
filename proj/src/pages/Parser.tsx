/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import Styles from './SNT.module.less'
import TaskLoop from "../lib/TaskLoop"

interface IProps {
  listName?: string;
}
const SNT: React.FC<IProps> = (props: IProps) => {

  const { listName } = props;
  const [list, setList] = useState<string[][]>([])
  useEffect(() => {
    const requestData = async () => {
      const kuromoji: any = (window as any).kuromoji;
      kuromoji?.builder({ dicPath: "kuromoji.js/dict/" }).build(function (err: any, tokenizer: any) {
        // tokenizer is ready

        
        const path = tokenizer.tokenize("すもももももももものうち");
        console.log(1111, path);
      });


      setList([['あした']])
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
