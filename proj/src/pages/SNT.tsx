import { useEffect, useState } from "react"
import Styles from './SNT.module.less'
import TaskLoop from "../lib/TaskLoop"

interface IProps {
  listName: string;
}
const SNT: React.FC<IProps> = (props : IProps) => {
  const {listName} = props;
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    const requestData = async () => {
      const res = await fetch(`./${listName}.txt`);
      const text = await res.text();
      const lines = text.split('\n').slice(0, 5000);
      setList(lines)
    }
    requestData()
  }, [])

  return (
    <div className={Styles.listContainer}>
      <ol className={Styles.sentenceList}>
        {
          list.map((it_, index) => {
            const [it, ruby] = JSON.parse(it_)
            return (
              <li className={Styles.sentenceItem} onClick={
                (e) => {
                  const dom = e.target as HTMLElement
                  dom.style = 'background: transparent';
                  // console.log(11111, dom)
                  // setTimeout(() => {
                  //   dom.style = 'background: unset';
                  // }, 100)

                  e.stopPropagation();
                  TaskLoop.addTask(it);
                  TaskLoop.tryStart();
                }
              }>
                <span className={Styles.index}>{index + 1}</span>
                <span className={Styles.text} dangerouslySetInnerHTML={{ __html: ruby }}></span>
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
