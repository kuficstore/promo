import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="top">
      <div className="top__container">
        <div className="top__logo">kufic.store</div>
        <div className="top__description">
          Поможет подготовиться <br/>и выпольнить молитву наилучшим образом
        </div>
      </div>
    </div>
    <div className="preview">
      <div className="preview__container">
        <div className="preview__kit"></div>
      </div>
    </div>
    <div className="pray">
      <div className="pray__container">
          <div className="pray__list">
            <div className="pray__item">
              <a href="https://namaz.kufic.store/fadzhr/" className="pray__link">
                Утренняя молитва
              </a>
            </div>
            <div className="pray__item">
              <a href="https://namaz.kufic.store/zuhr/" className="pray__link">
                Полуденная молитва
                </a>
            </div>
            <div className="pray__item">
              <a href="https://namaz.kufic.store/asr/" className="pray__link">
                Послеполуденная молитва
                </a>
            </div>
            <div className="pray__item">
              <a href="https://namaz.kufic.store/magrib/" className="pray__link">
                Вечерняя молитва
                </a>
            </div>
            <div className="pray__item">
              <a href="https://namaz.kufic.store/isha/" className="pray__link">
                Ночная молитва
                </a>
            </div>
          </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer__container">
        <div className="copyright">
            <div className="copyright__logo"></div>
            <div className="copyright__description">
              Знайте, что самым лучшим из ваших <br/>деяний является намаз!
            </div>
          </div>
        <div className="footer__date">
          2020
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
