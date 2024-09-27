import './style.scss'
import { Divider } from '@mui/material'
import store from '../../../stores/store'

export default function PersonnePhysique() {
  const { personnePhysique } = store.DataDashboard()

  return (
    <div className="card">
      <div className="card__item">
        <span className="card__type">Total de Pessoas</span>
        <span className="card__total">{personnePhysique.total}</span>
      </div>

      <div className="card__item">
        <span className="card__type">Total por Sexo</span>
        <div className="card__multiple-type">
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.sexo.masculino}
            </span>
            <span className="card__type">Masculino</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.sexo.feminino}
            </span>
            <span className="card__type">Feminino</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.sexo.indefinido}
            </span>
            <span className="card__type">Indefinido</span>
          </div>
        </div>
      </div>

      <div className="card__item">
        <span className="card__type">Total com Participação em Empresas</span>
        <span className="card__total">
          {personnePhysique.participaEmpresa.sim}
        </span>
      </div>

      <div className="card__item">
        <span className="card__type">Categorias de Carteira de registro</span>
        <div className="card__multiple-type">
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.carteira.cobranca}
            </span>
            <span className="card__type">Cobrança</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.carteira.ecommerce}
            </span>
            <span className="card__type">Ecommerce</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.carteira.aposentados}
            </span>
            <span className="card__type">Aposentados</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.carteira.outros}
            </span>
            <span className="card__type">Outros</span>
          </div>
        </div>
      </div>

      <div className="card__item">
        <span className="card__type">Total por Faixa Etária</span>
        <div className="card__multiple-type">
          <div className="card__multiple-group">
            <span className="card__total">{personnePhysique.idade['-18']}</span>
            <span className="card__type">-18 anos</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.idade['19a25']}
            </span>
            <span className="card__type">19 a 25 anos</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.idade['26a40']}
            </span>
            <span className="card__type">26 a 40 anos</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.idade['41a60']}
            </span>
            <span className="card__type">41 a 60 anos</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.idade['61a80']}
            </span>
            <span className="card__type">61 a 80 anos</span>
          </div>
          <Divider className="card__divider" orientation="vertical" flexItem />
          <div className="card__multiple-group">
            <span className="card__total">{personnePhysique.idade['+80']}</span>
            <span className="card__type">+80 anos</span>
          </div>
        </div>
      </div>

      <div className="card__graphic"></div>
    </div>
  )
}
