import { Grid } from '@mantine/core'
import ItemCard from '@molecule/ItemCard'
import type { DeployPageTemplateProps } from '@interfaces/template'

export default function DeployPageTemplate({ DeployItems }: DeployPageTemplateProps): JSX.Element {
  return (
    <Grid>
      {DeployItems.map((item, index) => (
        <Grid.Col key={index} span={4}>
          <ItemCard {...item} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
