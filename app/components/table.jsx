import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Button
} from "@heroui/react"
// import {
//   Bars3Icon,
//   BellIcon,
//   UserIcon,
//   ArrowsPointingOutIcon,
//   XCircleIcon,
//   CheckCircleIcon
// } from '@heroicons/react/24/outline'

export const columns = [
  { name: 'عملیات', uid: 'actions' },
  { name: 'ساعت', uid: 'hour' },
  { name: 'روز', uid: 'date' },
  { name: 'نام', uid: 'name' },
  { name: '#', uid: 'id' },
]

export const users = [
  {
    id: 1,
    name: 'Tony Reichert',
    hour: '12',
    date: '1403/10/12',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    phone: '09128929728'
  },
  {
    id: 1,
    name: 'Tony Reichert',
    hour: '12',
    date: '1403/10/12',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    phone: '09128929728'
  },
  {
    id: 1,
    name: 'Tony Reichert',
    hour: '12',
    date: '1403/10/12',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    phone: '09128929728'
  },
  {
    id: 1,
    name: 'Tony Reichert',
    hour: '12',
    date: '1403/10/12',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    phone: '09128929728'
  },
  {
    id: 1,
    name: 'Tony Reichert',
    hour: '12',
    date: '1403/10/12',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    phone: '09128929728'
  },

]

const statusColorMap = {
  active: 'bg-green-200 text-green-800',
  paused: 'bg-red-200 text-red-800',
  vacation: 'bg-yellow-200 text-yellow-800'
}

export default function TimeTable () {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      
      case 'id':
        return <span className=' text-medium'>{user.id}</span>

      case 'hour':
        return (
          <Chip color='default' variant='faded'>
            {user.hour}
          </Chip>
        )
      case 'date':
        return (
          <span className='' >
            {user.date}
          </span>
        )
      case 'actions':
        return (
          <div className='flex items-center justify-end'>
            <Tooltip content='انصراف'>
              <Button
                variant='light'
                isIconOnly
                aria-label='Like'
                color='danger'
              >
                {/* <XCircleIcon className='w-6 h-6' /> */}
              </Button>
            </Tooltip>
            <Tooltip content='تایید'>
              <Button
                variant='light'
                isIconOnly
                aria-label='Like'
                color='success'
              >
                {/* <CheckCircleIcon className='w-6 h-6' /> */}
              </Button>
            </Tooltip>
          </div>
        )
      case 'name':
        return (
          <div className='flex flex-col text-end gap-2'>
            <p className='font-bold text-black text-sm '>{cellValue}</p>
            <p className='text-sm text-black'>{user.phone}</p>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Table radius='sm' aria-label='جدول نمونه با سلول‌های سفارشی'>
      <TableHeader columns={columns}>
        {column => (
          <TableColumn key={column.uid} align='end'>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => (
              <TableCell className='text-end'>
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
