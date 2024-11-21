import DeployPageTemplate from '@template/DeployPageTemplate'
import type { ItemCardProps } from '@renderer/interfaces/molecule'

export default function DeployPage(): JSX.Element {
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

  const DeployItems: ItemCardProps[] = [
    {
      label: 'Application',
      iconName: 'AppWindowMac',
      resource: [resourcePreset.s3, resourcePreset.cloudfront]
    },
    {
      label: 'Studio',
      iconName: 'Wand',
      resource: [resourcePreset.s3, resourcePreset.cloudfront]
    },
    {
      label: 'Lambda',
      iconName: 'SquareFunction',
      resource: [resourcePreset.lambda]
    },
    {
      label: 'LambdaMap',
      iconName: 'Compass',
      resource: [resourcePreset.dynamodb]
    }
  ]

  return <DeployPageTemplate DeployItems={DeployItems} />
}
