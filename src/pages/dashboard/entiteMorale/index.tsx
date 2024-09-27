import './style.scss'
import { Divider } from '@mui/material'
import store from '../../../stores/store'
import { Fragment, useEffect } from 'react'

export default function EntiteMorale() {
  const { entiteMorale } = store.DataDashboard()

  useEffect(() => {
    console.log(entiteMorale)
  }, [entiteMorale])

  return (
    <div className="card">
      <div className="card__item">
        <span className="card__type">Total de Pessoas</span>
        <span className="card__total">{entiteMorale.total}</span>
      </div>

      <div className="card__item">
        <span className="card__type">Total por CNAEs</span>
        <div className="card__multiple-type">
          {Object.entries(entiteMorale.cnaes).map(([type, total], index) => (
            <Fragment key={type}>
              <div className="card__multiple-group">
                <span className="card__total">{total}</span>
                <span className="card__type">{type}</span>
              </div>
              {index < Object.entries(entiteMorale.cnaes).length - 1 && (
                <Divider
                  className="card__divider"
                  orientation="vertical"
                  flexItem
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="card__item">
        <span className="card__type">Total por Natureza Jurídica</span>
        <div className="card__multiple-type">
          {Object.entries(entiteMorale.naturezaJuridica).map(
            ([type, total], index) => (
              <Fragment key={type}>
                <div className="card__multiple-group">
                  <span className="card__total">{total}</span>
                  <span className="card__type">{type}</span>
                </div>
                {index <
                  Object.entries(entiteMorale.naturezaJuridica).length - 1 && (
                  <Divider
                    className="card__divider"
                    orientation="vertical"
                    flexItem
                  />
                )}
              </Fragment>
            )
          )}
        </div>
      </div>

      <div className="card__item">
        <span className="card__type">Total por Faixa Etária</span>
        <div className="card__multiple-type">
          <div className="card__multiple-group">
            <span className="card__total">{entiteMorale.idade[1]}</span>
            <span className="card__type">1 ano</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">{entiteMorale.idade[5]}</span>
            <span className="card__type">5 anos</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">{entiteMorale.idade[10]}</span>
            <span className="card__type">10 anos</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">{entiteMorale.idade['+20']}</span>
            <span className="card__type">+20 anos</span>
          </div>
        </div>
      </div>

      <div className="card__graphic"></div>
    </div>
  )
}
