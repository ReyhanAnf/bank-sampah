import {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
} from '../../../_metronic/partials/widgets'
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar'
import { Content } from '../../../_metronic/layout/components/content'
import { DashboardOperator } from './DashboardOperator'
import { DashboardBendahara } from './DashboardBendahara'
import { DashboardDirektur } from './DashboardDirektur'

const DashboardPage: FC = () => {
  const [currentRole, setCurrentRole] = useState<string>('operator')

  useEffect(() => {
    const role = localStorage.getItem('ekoberseka_role') || 'operator'
    setCurrentRole(role)
  }, [])

  // Listen for role changes
  useEffect(() => {
    const handleRoleChange = (event: CustomEvent) => {
      setCurrentRole(event.detail.role)
    }

    const handleStorageChange = () => {
      const role = localStorage.getItem('ekoberseka_role') || 'operator'
      setCurrentRole(role)
    }

    window.addEventListener('roleChanged', handleRoleChange as EventListener)
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('roleChanged', handleRoleChange as EventListener)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const renderDashboard = () => {
    switch (currentRole) {
      case 'operator':
        return <DashboardOperator />
      case 'bendahara':
        return <DashboardBendahara />
      case 'direktur':
        return <DashboardDirektur />
      default:
        return <DashboardOperator />
    }
  }

  return renderDashboard()
}

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
