import { useEffect, useMemo, useState } from 'react'
import {
  Modal,
  Drawer,
  Input,
  Text,
  Checkbox,
  Stack,
  ScrollArea,
  type ModalProps,
  type DrawerProps
} from '@mantine/core'
import Icon from '@atom/Icon'
import type { PopupProps } from '@interfaces/molecule'

const config = {
  overlayProps: {
    backgroundOpacity: 0.3,
    blur: 1
  }
}

/**
 * Side Component (Drawer)
 */
const Side = (props: PopupProps & DrawerProps): JSX.Element => {
  const [searchData, setSearchData] = useState<string>('')
  const [filteredData, setFilteredData] = useState<string[]>(props.data)
  const [selectedData, setSelectedData] = useState<string[]>([])

  // Init
  useEffect(() => {
    // update local selectedData
    setSelectedData(props.selectedData ?? [])
  }, [])

  // filterd on change searchData
  useEffect(() => {
    // is empty, do not filter
    if (searchData === '') {
      setFilteredData(props.data)
    }
    // filter with Case-Insensitive
    else {
      const filtered = props.data.filter((item) => item.toLowerCase().includes(searchData.toLowerCase()))
      setFilteredData(filtered)
    }
  }, [searchData, props.data])

  const handleSelectChange = (value: string, checked: boolean) => {
    const updatedSelectedData = checked ? [...selectedData, value] : selectedData.filter((item) => item !== value)

    setSelectedData(updatedSelectedData)
  }

  const handleOnClonse = () => {
    // Update props.selectedData
    if (props?.selectable && props?.selectedData) {
      props.onSelectionChange!(selectedData)
    }

    props.onClose()
  }

  // Memoized rendering item
  const renderedItems = useMemo(
    () =>
      filteredData.map((value, index) =>
        props.selectable ? (
          <Checkbox
            key={index}
            label={value}
            checked={selectedData.includes(value)}
            onChange={(e) => handleSelectChange(value, e.currentTarget.checked)}
          />
        ) : (
          <Text key={index}>{value}</Text>
        )
      ),
    [filteredData, selectedData, props.selectable]
  )

  return (
    <Drawer
      size={props.size}
      opened={props.opened}
      onClose={handleOnClonse}
      title={props.title}
      position={props.position ?? 'right'}
      overlayProps={config.overlayProps}
      scrollAreaComponent={ScrollArea.Autosize}
    >
      {props.searchable && (
        <Drawer.Header flex={1} p={0} style={{ justifyContent: 'center' }}>
          <Input
            w="90%"
            leftSection={<Icon name="Search" size={16} />}
            value={searchData}
            onChange={(event) => setSearchData(event.currentTarget.value)}
          />
        </Drawer.Header>
      )}
      <Drawer.Body mt={10}>
        <Stack gap={10}>{renderedItems}</Stack>
      </Drawer.Body>
    </Drawer>
  )
}

/**
 * Popup Component (Modal)
 */
function Popup(props: PopupProps & ModalProps) {
  return (
    <Modal opened={props.opened} onClose={props.onClose} title={props.title} overlayProps={config.overlayProps}>
      <Modal.Body>{props.content}</Modal.Body>
    </Modal>
  )
}

// Attach the Side component as a property of Popup
Popup.Side = Side

export default Popup
