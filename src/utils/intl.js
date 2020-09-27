import {createIntl} from 'react-intl'

export const intl = createIntl(
    {
      locale: 'br',
      defaultLocale: 'br',
    },
    
  )

export const formataValor = (preco) => intl.formatNumber(preco, {style: 'currency', currency: 'BRL'})