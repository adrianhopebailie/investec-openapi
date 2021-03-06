export interface Config {
  proxyUrl?: string
  clientId: string
  secret: string
}

export interface GetAccountsResponse {
  data: {
    accounts: {
      accountId: string
      accountNumber: string
      accountName: string
      referenceName: string
      productName: string
    }[]
  }
  links: {
    self: string
  }
  meta: {
    totalPages: number
  }
}

export interface GetAccountTransactionResponse {
  data: {
    transactions: {
      accountId: string
      type: string
      status: string
      description: string
      cardNumber: string
      postingData: string
      valueDate: string
      actionDate: string
      amount: number
    }[]
  }
  links: {
    self: string
  }
  meta: {
    totalPages: number
  }
}

export interface GetAccountBalanceResponse {
  data: {
    accountId: string
    currentBalance: number
    availableBalance: number
    currency: string
  }
  links: {
    self: string
  }
  meta: {
    totalPages: number
  }
}
