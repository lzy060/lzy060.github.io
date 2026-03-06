
import Styles from './Home.module.less'
import { router } from '../main'
import { listPageNames } from '../main'

const Home: React.FC = () => {
  const pages = [['KANA', ''], ...listPageNames]
  return (
    <div className={Styles.intro}>
      {
        pages.map((it) => (
          <div className={Styles.page}
            onClick={() => {
              router.navigate(`/${it[0].toLowerCase().split(' ')[0]}`)
          }}>{it[0]}</div>
        ))
      }
    </div>
  )
}
export default Home