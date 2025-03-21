'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

// キーマッピング（1Q2W3E4R5T + 0）
const VIDEO_KEYS: Record<string, string> = {
  '1': '1__These.mp4',
  q: '1_Q.mp4',
  '2': '2__Pirate.mp4',
  w: '2_W.mp4',
  '3': '3__Conan.mp4',
  e: '3_E.mp4',
  '4': '4__Japan.mp4',
  r: '4_R.mp4',
  '5': '5__Disney.mp4',
  t: '5_T.mp4',
}

export default function Home() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [fadeState, setFadeState] = useState<'visible' | 'fadeToBlack' | 'fadeInVideo'>('visible')
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase()
    if (VIDEO_KEYS[key]) {
      const newSrc = `/videos/${VIDEO_KEYS[key]}`

      // 1. まず1秒かけて黒画面にフェードアウト
      setFadeState('fadeToBlack')

      setTimeout(() => {
        // 2. 完全に黒画面になったら動画をセット（0秒で待機）
        setVideoSrc(newSrc)
        if (videoRef.current) {
          videoRef.current.currentTime = 0
        }
      }, 1000) // 1秒後に黒画面完了

      setTimeout(() => {
        // 3. 2秒かけて黒画面からフェードイン
        setFadeState('fadeInVideo')
      }, 1000) // 1秒後 → ここからフェード開始

      setTimeout(() => {
        // 4. フェード完了後に動画を再生
        if (videoRef.current) {
          videoRef.current.play().catch((err) => console.error('Video play error:', err))
        }
      }, 3000) // 黒画面 1秒 + フェード 2秒 = 3秒後に再生
    } else if (key === '0') {
      // 0キーで黒画面に戻す
      setFadeState('fadeToBlack')

      setTimeout(() => {
        setVideoSrc(null)
      }, 1000)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration
      videoRef.current.pause()
    }
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      {/* 黒画面フェード用のオーバーレイ */}
      <div
        className={clsx('absolute inset-0 bg-black transition-opacity', {
          'opacity-100 duration-1000': fadeState === 'fadeToBlack',
          'opacity-0 duration-2000': fadeState === 'fadeInVideo',
        })}
      />
      {videoSrc && (
        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          className="w-screen h-screen object-contain"
          onEnded={handleEnded}
          muted
          playsInline
        />
      )}
    </div>
  )
}
