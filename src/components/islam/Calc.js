//@ts-check
import React, { useState, useReducer, useMemo } from 'react';
import Solution from '../islam/Solution/Solution'
import Input from '../islam/Input/Input'
import { defaultHeirs, calculate } from '@hu-bcs1/islamic-inheritance-calculator'

import Fab from '@material/react-fab'
import Button from '@material/react-button'
import Modal from 'react-modal'

// import T from '../translation-en.json'
import { useTranslation } from '../islam/translation'

import '@material/react-button/dist/button.css'
import '@material/react-fab/dist/fab.css'
import './Calc.css';
import './Modal.css';

Modal.setAppElement('#root')

const Calc = () => {
  const t = useTranslation()
  const [heirs, dispatch] = useHeirInput()
  const results = useMemo(() => calculate(heirs), [heirs])
  const [solutionModalIsOpen, setSolutionModalIsOpen] = useState(false)

  const closeAndReset = () => {
    dispatch({ type: 'reset' })
    setSolutionModalIsOpen(false)
  }

  return (
    <>
      <header className="Calc-header">
        <p className="Calc-name">{t('title')}</p>
      </header>
      <main className="Calc-main" dir={t('lang') === 'ar' ? 'rtl' : 'ltr'}>
        <Input heirs={heirs} dispatch={dispatch} />
        <Fab
          onClick={() => setSolutionModalIsOpen(true)}
          className="Calc-calculate-button"
          textLabel={t('calculate')}
        />
        <Modal
          isOpen={solutionModalIsOpen}
          className="Calc-modal"
          overlayClassName="Calc-overlay"
          onRequestClose={() => setSolutionModalIsOpen(false)}
        >
          <Solution results={results} />
          <Button
            unelevated
            className="Calc-close-modal-button"
            onClick={closeAndReset}>
            {t('close')}
          </Button>
        </Modal>
      </main>
    </>
  );
}

export default Calc;

const useHeirInput = () => {
  const initialState = defaultHeirs
  const reducer = (state, action) => {
    switch(action.type) {
      case 'change_count':
        if(action.count > 0) {
          if(action.heir === 'husband') {
            return { ...state, wife: 0, [action.heir]: action.count }
          }
          if(action.heir === 'wife') {
            return { ...state, husband: 0, [action.heir]: action.count }
          }
        }
        return { ...state, [action.heir]: action.count }
      case 'reset':
        return initialState
      default:
        throw Error('unknown action type')
    }
  }
  return useReducer(reducer, initialState)
}