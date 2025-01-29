import { Breadcrumbs, BreadcrumbItem } from '@heroui/react'

const Bread = () => {
  const sizes = ['sm', 'md', 'lg']

  return (
    <div className='flex flex-col flex-wrap gap-4'>
      <span>{'<'}</span>
      <Breadcrumbs d size='md'>
        <BreadcrumbItem>زمان</BreadcrumbItem>
        <BreadcrumbItem>خدمات</BreadcrumbItem>
        <BreadcrumbItem>سعت</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  )
}
export default Bread
