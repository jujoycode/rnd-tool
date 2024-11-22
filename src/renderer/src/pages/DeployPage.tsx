import { Grid, Stack, Text, Group } from '@mantine/core'
import ItemCard from '@molecule/ItemCard'
import { CommonUtil } from '@hooks/util'
import type { ItemCardProps } from '@interfaces/molecule'
import type { ExecutionInfo } from '@interfaces/page'

export default function DeployPage(): JSX.Element {
  const rootPath = '/deploy'

  const resourcePreset = {
    s3: {
      label: 'S3',
      color: '#649a47'
    },
    cloudfront: {
      label: 'CloudFront',
      color: '#ac7ce8'
    },
    lambda: {
      label: 'Lambda',
      color: '#ffce64'
    },
    dynamodb: {
      label: 'DynamoDB',
      color: '#5c69ac'
    }
  }

  const bodyTemplate = (executionInfo: ExecutionInfo) => (
    <Stack gap={0} mb="sm" h={60}>
      <Text size="xs" fw={700}>
        Last Execution
      </Text>
      {/* By */}
      <Group mt={5} gap={3}>
        <Text size="xs" fw={300}>
          By
        </Text>
        <Text size="xs" fw={100}>
          {executionInfo.by}
        </Text>
      </Group>
      {/* When */}
      <Group gap={3}>
        <Text size="xs" fw={300}>
          When:
        </Text>
        <Text size="xs" fw={100}>
          {CommonUtil.getRelativeTime(new Date(executionInfo.when))} ago
        </Text>
      </Group>
      {/* Target */}
      {executionInfo.target && (
        <Group gap={3} w={70}>
          <Text size="xs" fw={300}>
            Target:
          </Text>
          <Text size="xs" fw={100}>
            {executionInfo.target}
          </Text>
        </Group>
      )}
    </Stack>
  )

  const DeployItems: ItemCardProps[] = [
    {
      label: 'CALS Application',
      iconName: 'AppWindowMac',
      resource: [resourcePreset.s3, resourcePreset.cloudfront],
      nextPath: '/application',
      children: bodyTemplate({
        by: 'tm.kim',
        when: '2024-11-22T08:00:00.000Z'
      })
    },
    {
      label: 'CALS Studio',
      iconName: 'Wand',
      resource: [resourcePreset.s3, resourcePreset.cloudfront],
      nextPath: '/studio',
      children: bodyTemplate({
        by: 'tm.kim',
        when: '2024-11-22T08:00:00.000Z'
      })
    },
    {
      label: 'Lambda',
      iconName: 'SquareFunction',
      resource: [resourcePreset.lambda],
      nextPath: '/lambda',
      children: bodyTemplate({
        by: 'yg.lee',
        when: '2024-10-10T00:00:00.000Z',
        target: ''
      })
    },
    {
      label: 'Version Map',
      iconName: 'Compass',
      resource: [resourcePreset.dynamodb],
      nextPath: '/versionMap',
      children: bodyTemplate({
        by: 'jh.ryu',
        when: '2024-11-20T00:00:00.000Z'
      })
    }
  ]

  return (
    <Grid grow gutter="md" align="center" justify="center">
      {DeployItems.map((item, index) => (
        <Grid.Col key={index} span={3}>
          <ItemCard {...item} nextPath={rootPath + (item.nextPath ?? '')} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
