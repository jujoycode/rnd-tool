import LoaderClass from "@renderer/style/Loader.module.css"

import { Center, Stack, Text } from "@mantine/core"
import { useState, useEffect } from "react"

import type { LoaderProps } from "@renderer/interface"

export function Loader(props: LoaderProps): JSX.Element {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 20)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    if (loadingProgress >= 100) {
      props.setIsLoading(false)
    }
  }, [loadingProgress, props.setIsLoading])

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
