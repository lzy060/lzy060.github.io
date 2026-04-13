/* eslint-disable */
import { useEffect, useState } from "react"
import Styles from './SNT.module.less'
import TaskLoop from "../lib/TaskLoop"

interface IProps {
  listName?: string;
}
const SNT: React.FC<IProps> = (props: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  let test = `
銀{ぎん}
龍{りゅん}
背{せ}
乗っ{のっ}`
  const [text, setText] = useState<string>(test)

  const { listName } = props;
  const [list, setList] = useState<string[][]>([])
  useEffect(() => {
    const request = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      let textFromUrl = ''
      const listUrl = urlParams.get('list');
      if (listUrl) {
        const res = await fetch(listUrl);
        textFromUrl = await res.text();
      }

      if (textFromUrl) {
        setText(textFromUrl);
      }
      const csvlines = text.split('\n').filter((it) => it !== '').map((li) => li.split(','));
      setList(csvlines)
      setIsLoading(false)
    }
    request()
  }, [text, isLoading])


  const isRuby = listName?.includes('ruby')


  if (isLoading) {
    return <div className={Styles.loading}>loading...</div>
  }

  const parsedPronounce = (input: string) => {
    let pronounce = input;
    const regex = /(.*)\{(.*)\}/;
    const matches = input.match(regex);
    if (matches?.length === 3) {
      pronounce = matches[2]
    }
    return pronounce;
  }

  return (
    <div className={Styles.listContainer}>


      <ol className={Styles.sentenceList}>
        {
          <textarea
            defaultValue={text}
            onChange={(e) => setText(e.target.value)} // Update state on change
            placeholder="Enter your text"

          />
        }
        {
          list.map((it_, index) => {
            const [it, ruby] = it_
            return (
              <li className={Styles.sentenceItem} onClick={
                (e) => {
                  const dom = e.target as HTMLElement
                  dom.style = 'background: transparent';
                  e.stopPropagation();
                  TaskLoop.addTask(parsedPronounce(it));
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
      <div
        onClick={() => {
          list.forEach((s) => {
            TaskLoop.addTask(parsedPronounce(s[0]));
          })
          TaskLoop.tryStart();
        }}>
        {'Read all'}
      </div>
    </div>

  )
}

export default SNT
