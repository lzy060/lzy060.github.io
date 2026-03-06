import { useEffect, useState } from "react"
import TaskLoop from "../lib/TaskLoop"
import Styles from './HUD.module.less'
import Timer from "../lib/Timer"

const HUD: React.FC = () => {
    const [hudText1, setHudText1] = useState('')
    const [hudText2, setHudText2] = useState('')
    useEffect(() => {
        Timer.tryStart()
        setHudText1(`${Timer.getHours().toFixed(1) || '0'} Hours`)
        setTimeout(() => {
            setHudText1('')
        }, 2000)
    }, [])
    useEffect(() => {
        const update = () => {
            setHudText2(`${TaskLoop.tasks.length || ''} `)
            // setHudText1(`${TaskLoop.curTask}`)
        }
        TaskLoop.addOnChangedListener(update);
        return () => {
            TaskLoop.removeOnChangedListener(update)
        }
    }, [])
    return (
        <div className={Styles.hud}>
            <span className={Styles.textLeft}>{hudText1}</span>
            <span className={Styles.textRight}>{hudText2}</span>
        </div>
    )
}

export default HUD
