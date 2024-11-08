import LoaderClass from '@renderer/style/Loader.module.css'

import { Center, Stack, Text } from '@mantine/core'
import { useState, useEffect, useRef } from 'react'

import type { LoaderProps } from '@renderer/interface'

export function Loader(props: LoaderProps): JSX.Element {
  const [loadingProgress, setLoadingProgress] = useState(0)

  const progressRef = useRef<number>(0)
  const rafRef = useRef<number>()

  useEffect(() => {
    let startTime = performance.now()
    const duration = 2000 // 2초 동안 로딩

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min((elapsed / duration) * 100, 100)

      progressRef.current = progress
      setLoadingProgress(progress)

      if (progress < 100) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        props.setIsLoading(false)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [props.setIsLoading])

  return (
    <div>
      <Center h="100vh">
        <Stack align="center" w="80%" maw={400}>
          <div className={LoaderClass.loadingBarContainer}>
            <div className={LoaderClass.loadingBar} style={{ width: `${loadingProgress}%` }} />
          </div>
          <Text size="xs" mt={7} fw={500} className={LoaderClass.title}>
            {props.title}
          </Text>
        </Stack>
      </Center>
    </div>
  )
}
