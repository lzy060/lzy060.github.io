
import Styles from './Home.module.less'
import { router } from '../main'
import { listPageNames } from '../main'

const Home: React.FC = () => {
  const pages = [['KANA', ''], ...listPageNames, ['PARSER-TOOL', ''], ['LIST-TOOL', ''], ['👊 word-lists', '/word-lists/index.html']]
  return (
    <div className={Styles.intro}>
      {
        pages.map((it) => (
          <div className={Styles.page}
            onClick={() => {
              if (it[1]) {
                window.open(it[1])
              } else {
                router.navigate(`/${it[0].toLowerCase().split(' ')[0]}`)
              }
            }}>{it[0]}</div>
        ))
      }
    </div>
  )
}
export default Home