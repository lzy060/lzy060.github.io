
import Styles from './Home.module.less'
import { router } from '../main'
import { pageNames } from '../lib/Config'

const Home: React.FC = () => {
  const pages = pageNames
  return (
    <div className={Styles.intro}>
      {
        pages.map((it) => (
          <div className={Styles.page}
            onClick={() => {
              router.navigate(`/${it.toLocaleLowerCase()}`)
          }}>{it}</div>
        ))
      }
    </div>
  )
}
export default Home