import { kanaData, chartData, dakuonMapping } from '../lib/Kana'
import Styles from './KANA.module.less'
import TaskLoop from "../lib/TaskLoop"
import classNames from 'classnames'
import { useState } from 'react'

const KANA: React.FC = () => {
  const [isHideRomaji, setIsHideRomaji] = useState(false);
  const [isHideHiragana] = useState(false);
  const [isHideKatakana] = useState(false);

  console.log({ kanaData, chartData, dakuonMapping })
  const basicDataOnly = chartData.basic.slice(1, chartData.basic.length).map((it) => it.slice(1, 6))

  const allBasicSounds = basicDataOnly
  const allSounds = chartData.allSounds
  console.log('basicDataOnly', { basicDataOnly, kanaData, chartData, dakuonMapping, allSounds })

  const kana2romaji = (k: string) => {
    const realKey = k.split('/')[0]
    const mapping: { [key: string]: string } = {};
    [
      ...kanaData.basic.katakana,
      ...kanaData.basic.hiragana,
      ...kanaData.dakuon.katakana,
      ...kanaData.dakuon.hiragana,
      ...kanaData.handakuon.katakana,
      ...kanaData.handakuon.hiragana,
      ...kanaData.youon.katakana,
      ...kanaData.youon.hiragana,
    ].forEach((it) => {
      mapping[it[0]] = it[1];
    })
    return mapping[realKey]
  }

  const kanaSeion2VoicedSoundsDakuon = (k: string) => {
    const realKey = k.split('/')[0]
    const mapping: { [key: string]: string } = {};
    [...dakuonMapping.dakuten_mappings, ...dakuonMapping.dakuten_mappings_katakana].forEach((it) => {
      const { items } = it;
      items.forEach((obj) => {
        const { clear, voiced } = obj
        mapping[clear] = voiced
      })
    })
    return mapping[realKey]
  }

  const kanaSeion2VoicedSoundsHandakuten = (k: string) => {
    const realKey = k.split('/')[0]
    const mapping: { [key: string]: string } = {};
    [dakuonMapping.handakuten_mappings, dakuonMapping.handakuten_mappings_katakana].forEach((it) => {
      const { items } = it;
      items.forEach((obj) => {
        const { clear, voiced } = obj
        mapping[clear] = voiced
      })
    })
    return mapping[realKey]
  }

  const handleClick = (e: any) => {
    e.stopPropagation();
    (e.target as HTMLElement).style = 'opacity: 0.4'
    setTimeout(() => {
      (e.target as HTMLElement).style = 'opacity: 1'
    }, 100)

    // 

    let targetKana = e.target.textContent.split('/')[0].trim()
    if (targetKana === 'は') {
      targetKana = 'ハ'
    }
    TaskLoop.addTask(targetKana);
    TaskLoop.tryStart();
  }

  return (
    <div className={classNames(Styles.kana, isHideRomaji && Styles.isHideRomaji, isHideHiragana && Styles.isHideHiragana, isHideKatakana && Styles.isHideKatakana)}>
      <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
        {/* <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead> */}

        <tbody>
          {basicDataOnly.map((row, indexRow) => (
            <tr key={indexRow}>
              {
                row.map((d) => {
                  const [hiragana, katakana] = d.split(' ')[0].split('/')

                  const dakuon = kanaSeion2VoicedSoundsDakuon(hiragana)
                  const handakuon = kanaSeion2VoicedSoundsHandakuten(hiragana)
                  const youonTails = [['ゃ', 'ャ'], ['ゅ', 'ュ'], ['ょ', 'ョ']]

                  return (
                    <td>
                      <div>
                        {/* Seion */}
                        {
                          hiragana && (
                            <>
                              <span className={Styles.basicKanaSeionRomaji}>{kana2romaji(hiragana)}</span>
                              <span className={Styles.basicKanaSeion} onClick={handleClick}>
                                {hiragana}
                                <em className={Styles.basicKanaSeionSep}> / </em>
                                {katakana}
                              </span>
                              <br />
                              <br />
                            </>
                          )
                        }

                        {/* Dakuon */}
                        {
                          dakuon && (
                            <>
                              <span className={Styles.basicKanaSeionRomaji}>{kana2romaji(dakuon)}</span>
                              <span className={Styles.basicKanaSeion} onClick={handleClick}>
                                {kanaSeion2VoicedSoundsDakuon(hiragana)}
                                <em className={Styles.basicKanaSeionSep}> / </em>
                                {kanaSeion2VoicedSoundsDakuon(katakana)}
                              </span>
                              <br /></>
                          )
                        }

                        {/* hanDakuon */}
                        {
                          handakuon && (
                            <>
                              <span className={Styles.basicKanaSeionRomaji}>{kana2romaji(handakuon)}</span>
                              <span className={Styles.basicKanaSeion} onClick={handleClick}>
                                {kanaSeion2VoicedSoundsHandakuten(hiragana)}
                                <em className={Styles.basicKanaSeionSep}> / </em>
                                {kanaSeion2VoicedSoundsHandakuten(katakana)}
                              </span>
                              <br /></>
                          )
                        }
                        <br />


                        {/* youonTails ゃ */}
                        {
                          youonTails.map((it) => {
                            const tragetYouon = `${hiragana}${it[0]}`
                            const tragetRomaji = kana2romaji(tragetYouon)
                            return tragetRomaji && (
                              (
                                <>
                                  <span className={Styles.basicKanaSeionRomaji}>{tragetRomaji}</span>
                                  <span className={Styles.basicKanaSeion} onClick={handleClick}>
                                    {`${hiragana}${it[0]}`}
                                    <em className={Styles.basicKanaSeionSep}> / </em>
                                    {`${katakana}${it[1]}`}
                                  </span>
                                  <br />
                                </>
                              )
                            )
                          })
                        }
                        {/*浊音半浊音拗音*/}

                      </div>
                    </td>
                  )
                })
              }
            </tr>
          ))}
        </tbody>
      </table>

      <div className={Styles.config}>
        <div
          onClick={() => {
            setIsHideRomaji((s) => !s)
          }}>Hide Romaji
        </div>

        <div
          onClick={() => {
            allBasicSounds.flat(2).forEach((s) => {
              let target = s.split('/')[0]
              if (target === 'は') {
                target = 'ハ'
              }
              TaskLoop.addTask(target);
            })
            TaskLoop.tryStart();
          }}>
          {'Read all(Seion)'}
        </div>

        <div
          onClick={() => {
            allSounds.flat(2).forEach((s) => {
              let target = s.split('/')[0]
              if (target === 'は') {
                target = 'ハ'
              }
              TaskLoop.addTask(target);
            })
            TaskLoop.tryStart();
          }}>
          {'Read all(Seion + Dakuon)'}
        </div>
        {/* <div
          onClick={() => {
            setIsHideHiragana((s) => !s)
          }}>Hide Hiragana
        </div>
        <div
          onClick={() => {
            setIsHideKatakana((s) => !s)
          }}>Hide katakana
        </div>
      */}
      </div>
    </div>
  )
}
export default KANA
